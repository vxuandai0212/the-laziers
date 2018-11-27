import React, { Component } from 'react'

export default class SidePost extends Component {
  render() {
    return (
        <div className="side_post">
            <a href="post.html">
                <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                    <div className="side_post_image"><div><img src="images/top_1.jpg" alt="" /></div></div>
                    <div className="side_post_content">
                        <div className="side_post_title">How Did van Gogh’s Turbulent Mind</div>
                        <small className="post_meta">Katy Liu<span>Sep 29</span></small>
                    </div>
                </div>
            </a>
        </div>
    )
  }
}
