import React, { Component } from 'react';
import Header from './components/Header'
import Menu from './components/Menu'
import Home from './components/Home'
import PageContent from './components/PageContent'

import axios from 'axios';
import _ from 'lodash';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
        slug: '',
        post: null,
        isLoading: true
    };
    this.init = this.init.bind(this);
  }

  componentDidMount = () => {
      let slug = this.props.match.params.slug ? this.props.match.params.slug : '';
      this.setState({slug: slug }, () => {
          this.init();
      });
  }

  init() {
      axios.get(`http://localhost:3200/api/v1/posts/${this.state.slug}`)
      .then(res => {
          let post = res.data.post;
          this.setState({ ...this.state, post, isLoading: false });
      })
  }
  render() {
    const { slug, post } = this.state 
    let post_home = post ? _.pick(post, ['title', 'category', 'full_width_thumbnail']) : null;
    return (
      <div>
        <Header />
        <Menu />
        <Home post={post_home} isPost={true}/>
        <PageContent post={post} isPost={true}/>
      </div>
    );
  }
}

export default Post;
