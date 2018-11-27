import React, { Component } from 'react'

export default class LargeCardWithBackground extends Component {
  render() {
    return (
        <div className="card card_large_with_background grid-item">
            <div className="card_background" style={{backgroundImage:"url(" + require('./images/post_8.jpg') + ")"}}></div>
            <div className="card-body">
                <div className="card-title"><a href="post.html">How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</a></div>
                <small className="post_meta"><a href="index.html">Katy Liu</a><span>Sep 29, 2017 at 9:48 am</span></small>
            </div>
        </div>
    )
  }
}
