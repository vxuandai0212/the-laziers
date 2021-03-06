import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SmallCardWithoutImage extends Component {
  render() {
    const post = this.props.post;
    let current_post;
    if (post) {
        current_post = 
        (
            <div className="card-body">
                <div className="card-title card-title-small"><Link to={post.view_url}>{post.title.substring(0, 60)}..</Link></div>
                <small className="post_meta"><a href="javascript:;">{post.created_by}</a><span>{post.createdAt}</span></small>
            </div>
        )
    } else {
        current_post = <p>Loading...</p>
    }
    return (
        <div className="card card_default card_small_no_image grid-item">
            { current_post }
        </div>
    )
  }
}
