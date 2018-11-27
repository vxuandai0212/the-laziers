import React, { Component } from 'react'

export default class BottomPanel extends Component {
  render() {
    return (
        <div className="post_panel bottom_panel d-flex flex-row align-items-center justify-content-start">
            <div className="author_image"><div><img src="images/author.jpg" alt=""/></div></div>
            <div className="post_meta"><a href="index.html">Katy Liu</a><span>Sep 29, 2017 at 9:48 am</span></div>
            <div className="post_share ml-sm-auto">
                <span>share</span>
                <ul className="post_share_list">
                    <li className="post_share_item"><a href="index.html"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li className="post_share_item"><a href="index.html"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li className="post_share_item"><a href="index.html"><i className="fa fa-google" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        </div>
    )
  }
}
