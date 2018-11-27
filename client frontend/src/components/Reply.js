import React, { Component } from 'react'

export default class Reply extends Component {
  render() {
    return (
        <ul className="comment_list">
            <li className="comment">
                <div className="comment_body">
                    <div className="comment_panel d-flex flex-row align-items-center justify-content-start">
                        <div className="comment_author_image"><div><img src="images/comment_author_2.jpg" alt=""/></div></div>
                        <small className="post_meta"><a href="index.html">Katy Liu</a><span>Sep 29, 2017 at 9:48 am</span></small>
                        <button type="button" className="reply_button ml-auto">Reply</button>
                    </div>
                    <div className="comment_content">
                        <p>Nulla facilisi. Aenean porttitor quis tortor id tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus molestie varius tincidunt. Vestibulum congue sed libero ac sodales.</p>
                    </div>
                </div>

                {/* Reply */}
                <ul className="comment_list">
                    
                </ul>
            </li>
        </ul>
    )
  }
}
