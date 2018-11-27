import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SimilarPosts from './SimilarPosts';

const uuidv4 = require('uuid/v4');

export default class SliderItem extends Component {
  render() {
    let posts = this.props.posts;
    let current_post = posts[0];
    let remain_posts = posts.slice(1,);
    return (
        <div className="owl-item">
            <div className="home_slider_background" style={{backgroundImage: "url(" + current_post.full_width_thumbnail + ")"}}></div>
            <div className="home_slider_content_container">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="home_slider_content">
                                <div className="home_slider_item_category trans_200"><Link onClick={this.forceUpdate} className="trans_200" to={"/articles/category/" + current_post.category.toLowerCase()}>{current_post.category}</Link></div>
                                <div className="home_slider_item_title">
                                    <Link to={current_post.view_url}>{current_post.title}</Link>
                                </div>
                                <div className="home_slider_item_link">
                                    <Link onClick={this.forceUpdate} className="trans_200" to={current_post.view_url}>Continue Reading
                                        <svg version="1.1" id="link_arrow_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                            width="19px" height="13px" viewBox="0 0 19 13" enableBackground="new 0 0 19 13" xmlSpace="preserve">
                                            <polygon fill="#FFFFFF" points="12.475,0 11.061,0 17.081,6.021 0,6.021 0,7.021 17.038,7.021 11.06,13 12.474,13 18.974,6.5 "/>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SimilarPosts key={uuidv4()} posts={remain_posts}/>
        </div>
    )
  }
}
