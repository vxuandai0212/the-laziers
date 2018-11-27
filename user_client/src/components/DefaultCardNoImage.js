import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class DefaultCardNoImage extends Component {
  render() {
    const post = this.props.post;
    let current_post;
    if (post) {
        current_post = 
        (
            <div className="card card_default card_default_no_image grid-item">
                <div className="card-body">
                    <div className="card-title card-title-small"><Link to={post.view_url}>{post.title}</Link></div>
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
