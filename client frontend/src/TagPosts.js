import React, { Component } from 'react';
import Header from './components/Header'
import Menu from './components/Menu'
import SmallCardWithImage from './components/SmallCardWithImage';
import SmallCardWithBackground from './components/SmallCardWithBackground';

import axios from 'axios';

class TagPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
        posts: [],
        limit: 11,
        isLoading: true,
        tag: ''
    };
    this.init = this.init.bind(this);
}

componentDidMount = () => {
  let tag = this.props.match.params.slug ? this.props.match.params.slug : '';
  this.setState({tag: tag }, () => {
      this.init();
  });
}

init() {
    axios.get(`http://localhost:3200/api/v1/posts`, {params: {limit: this.state.limit, tag: this.state.tag}})
    .then(res => {
        const posts = res.data.posts;
        this.setState({ ...this.state, posts, isLoading: false });
    })
}
  render() {
    const { tag, posts } = this.state;
    const posts_ui = posts.map((post, index) => 
      index % 2 == 0 ? <SmallCardWithImage key={post._id} post={post} /> : <SmallCardWithBackground key={post._id} post={post} />
    )
    return (
      <div>
        <Header tag={tag} pageType="category" />
        <Menu />
        <div className="page_content" style={{marginTop: '70px'}}>
            <div className="container">
                <div className="row row-lg-eq-height">
                    <div className="col-lg-12">
                      <div className="main_content">
                        <div className="blog_section">
                          <div className="section_panel d-flex flex-row align-items-center justify-content-start">
                            <div className="section_title">Don't Miss</div>
                          </div>
                          <div className="section_content">
                            <div className="grid clearfix">
                              {posts_ui}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="load_more">
                        <div id="load_more" className="load_more_button text-center trans_200">Load More</div>
                      </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default TagPosts;
