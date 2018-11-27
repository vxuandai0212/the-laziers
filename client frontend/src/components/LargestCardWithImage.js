import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class LargestCardWithImage extends Component {
  render() {
    const post = this.props.post;
    return (
        <div className="card card_largest_with_image grid-item">
            <img className="card-img-top" src={post.LargestCardWithImage} alt={post.title} />
            <div className="card-body">
                <div className="card-title"><Link to={post.view_url}>{post.title}</Link></div>
                <p className="card-text">{post.short_content}...</p>
                <small className="post_meta"><a href="javascript:;">{post.created_by}</a><span>{post.createdAt}</span></small>
            </div>
        </div>
    )
  }
}
