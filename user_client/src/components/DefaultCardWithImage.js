import React, { Component } from 'react'

export default class DefaultCardWithImage extends Component {
  render() {
    return (
        <div className="card card_small_with_image grid-item">
            <img className="card-img-top" src="images/post_5.jpg" alt="" />
            <div className="card-body">
                <div className="card-title card-title-small"><a href="post.html">How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</a></div>
                <small className="post_meta"><a href="index.html">Katy Liu</a><span>Sep 29, 2017 at 9:48 am</span></small>
            </div>
        </div>
    )
  }
}
