import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SimilarPost extends Component {
  render() {
    let post = this.props.post;
    return (
        <div className="col-lg-3 col-md-6 similar_post_col">
            <div className="similar_post trans_200">
                <Link onClick={this.forceUpdate} to={post.view_url}>{post.title}</Link>
            </div>
        </div>
    )
  }
}
