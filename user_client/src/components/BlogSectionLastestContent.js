import React, { Component } from 'react'
import SmallCardWithImage from './SmallCardWithImage';
import SmallCardWithoutImage from './SmallCardWithoutImage';
import SmallCardWithBackground from './SmallCardWithBackground';
import DefaultCardWithBackground from './DefaultCardWithBackground';

import axios from 'axios';

export default class BlogSectionLastestContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        posts: [],
        limit: 11,
        isLoading: true,
        category: ''
    };
    this.init = this.init.bind(this);
}

componentDidMount = () => {
  let category = this.props.category ? this.props.category : '';
  this.setState({category: category }, () => {
      this.init();
  });
}

init() {
    axios.get(`http://localhost:3200/api/v1/posts`, {params: {limit: this.state.limit, category: this.state.category}})
    .then(res => {
        const posts = res.data.posts;
        this.setState({ ...this.state, posts, isLoading: false });
    })
}
  render() {
    const { posts } = this.state;
    const posts_ui = posts.map((post, index) => 
      index % 2 == 0 ? <SmallCardWithImage key={post._id} post={post} /> : <SmallCardWithBackground key={post._id} post={post} />
    )
    return (
      <div className="section_content">
        <div className="grid clearfix">
          {posts_ui}
        </div>
		  </div>
    )
  }
}
