import React, { Component } from 'react'
import BlogSectionTrendingContent from './BlogSectionTrendingContent';
import Category from './Category';
import MoreCategory from './MoreCategory';

export default class BlogSectionTrending extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: ''
        };
        this.chooseCategory = this.chooseCategory.bind(this);
    }

    chooseCategory(category) {
        this.setState({
            category: category
        });
    }
    render() {
        return (
            <div className="blog_section">
                <div className="section_panel d-flex flex-row align-items-center justify-content-start">
                    <div className="section_title">What's Trending</div>
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
                <BlogSectionTrendingContent />
            </div>
        )
  }
}
