import React, { Component } from 'react'

export default class TopPanel extends Component {
  render() {
    const avatar = "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png"
    const post = this.props.post;
    return (
        <div className="post_panel post_panel_top d-flex flex-row align-items-center justify-content-start">
            <div className="author_image"><div><img src={avatar} alt="Default avatar"/></div></div>
            <div className="post_meta"><a href="javascript:;">{post.created_by}</a><span>{post.createdAt}</span></div>
            <div className="post_share ml-sm-auto">
                <span>share</span>
                <ul className="post_share_list">
                    <li className="post_share_item"><a href="javascript:;"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li className="post_share_item"><a href="javascript:;"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li className="post_share_item"><a href="javascript:;"><i className="fa fa-google" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        </div>
    )
  }
}
