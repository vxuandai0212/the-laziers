import React, { Component } from 'react'
import BlogSectionDontMissContent from './BlogSectionDontMissContent';
import BlogSectionLastestContent from './BlogSectionLastestContent';
import Category from './Category';
import MoreCategory from './MoreCategory';

import axios from 'axios';

export default class BlogSectionDontMiss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: '',
            posts: [],
            limit: 7,
            isLoading: true
        };
        this.chooseCategory = this.chooseCategory.bind(this);
        this.init = this.init.bind(this);
    }
    
    componentDidMount = () => {
        let category = this.props.category ? this.props.category : '';
        this.setState({ category: category }, () => {
            this.init();
        });
    }

    chooseCategory(category) {
        this.setState({category: category }, () => {
            this.init();
        });
    }

    init() {
        axios.get(`http://localhost:3200/api/v1/posts`, {params: {
            limit: this.state.limit, category: this.state.category
        }})
        .then(res => {
            const posts = res.data.posts;
            this.setState({ ...this.state, posts, isLoading: false });
        })
    }
    
  render() {
      console.log('render')
    let isCategory = this.props.isCategory;
    let category = this.props.category;
    const { isLoading, posts } = this.state
    let section;
    if (!isLoading) {
        if (isCategory) {
            section = <BlogSectionLastestContent category={category} />
        } else {
            section = <BlogSectionDontMissContent dm_posts={posts} />
        }
    } else {
        section = <p>Loading...</p>
    }
    let nav;
    if (!category) {
        nav = (
            <div className="section_panel d-flex flex-row align-items-center justify-content-start">
                <div className="section_title">Don't Miss</div>
                <div className="section_tags ml-auto">
                    <Category category={this.state.category} chooseCategory={this.chooseCategory}/>
                </div>
                <div className="section_panel_more">
                    <ul>
                        <li>more
                            <MoreCategory category={this.state.category} chooseCategory={this.chooseCategory}/>
                        </li>
                    </ul>
                </div>
            </div>
        )
    } else {
        nav = (
            <div className="section_panel d-flex flex-row align-items-center justify-content-start">
                <div className="section_title">Don't Miss</div>
            </div>
        )
    }
    return (
        <div className="blog_section">
            { nav }
            { section }
        </div>
    )
  }
}
