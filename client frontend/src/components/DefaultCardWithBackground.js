import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class DefaultCardWithBackground extends Component {
  render() {
    const post = this.props.post;
    let current_lastest_post;
    if (post) {
        current_lastest_post = 
        (
            <div className="card card_default card_default_with_background grid-item">
                <div className="card_background" style={{backgroundImage:"url(" + post.SmallCardWithImage + ")"}}></div>
                <div className="card-body">
                    <div className="card-title card-title-small"><Link to={post.view_url}>{post.title}</Link></div>
                </div>
            </div>
        )
    } else {
        current_lastest_post = <p>Loading...</p>
    }
    return (
        <div>
            { current_lastest_post }
        </div>
    )
  }
}
