import React, { Component } from 'react'

export default class LargeCardWithImage extends Component {
  render() {
    return (
        <div className="card grid-item card_large_with_image">
            <img className="card-img-top" src="images/post_9.jpg" alt=""/>
            <div className="card-body">
                <div className="card-title"><a href="post.html">2 How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</a></div>
                <p className="card-text">Pick the yellow peach that looks like a sunset with its red, orange, and pink coat skin, peel it off with your teeth. Sink them into unripened...</p>
                <small className="post_meta"><a href="index.html">Katy Liu</a><span>Sep 29, 2017 at 9:48 am</span></small>
            </div>
        </div>
    )
  }
}
