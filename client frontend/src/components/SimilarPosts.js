import React, { Component } from 'react'
import SimilarPost from './SimilarPost'
import { Link } from 'react-router-dom'

const uuidv4 = require('uuid/v4');

export default class SimilarPosts extends Component {
  render() {
    let posts = this.props.posts;
    let current_post = posts[0];
    let remain_posts = posts.slice(1,);
    let similar_posts = remain_posts.map((post) => 
        <SimilarPost key={uuidv4()} post={post}/>
    );

    let current_post_ui;
    if (current_post) {
        current_post_ui = 
        (
            <div className="home_slider_next_container">
                <Link onClick={this.forceUpdate} to={current_post.view_url}>
                    <div className="home_slider_next" style={{backgroundImage:"url(" + current_post.side_banner_thumbnail + ")"}}>
                        <div className="home_slider_next_background trans_400"></div>
                        <div className="home_slider_next_content trans_400">
                            <div className="home_slider_next_title">next</div>
                            <div className="home_slider_next_link">{current_post.title}</div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    } else {
        current_post_ui = <p>Loading...</p>
    }
    return (
        <div className="similar_posts_container">
            <div className="container">
                <div className="row d-flex flex-row align-items-end">
                    {similar_posts}
                </div>
            </div>
            {current_post_ui}
        </div>
    )
  }
}
