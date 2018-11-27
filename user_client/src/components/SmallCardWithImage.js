import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SmallCardWithImage extends Component {
  render() {
    const post = this.props.post;
    let current_post;
    if (post) {
        current_post = 
        (
            <div style={{minHeight: 240}} className="card card_small_with_image grid-item">
                <img className="card-img-top" src={post.SmallCardWithImage} alt={post.title} />
                <div className="card-body">
                    <div className="card-title card-title-small"><Link to={post.view_url}>{post.title}</Link></div>
                    <small className="post_meta"><a href="javascript:;">{post.created_by}</a><span>{post.createdAt}</span></small>
                </div>
            </div>
        )
    } else {
        current_post = <p>Loading...</p>
    }
    return (
        <div>
            { current_post }
        </div>
    )
  }
}
