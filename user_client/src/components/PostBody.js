import React, { Component } from 'react'
import PostTag from './PostTag';

export default class PostBody extends Component {
  render() {
    const post = this.props.post
    const tags = post ? post.tags : []
    return (
        <div className="post_body">
          <div dangerouslySetInnerHTML={{__html: post.content}}></div>
          <PostTag tags={tags} />
        </div>
    )
  }
}
