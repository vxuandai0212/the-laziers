import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Parallax, Background } from 'react-parallax';

export default class ParallaxBanner extends Component {
  render() {
    const post = this.props.post
    let post_ui;
    if (post) {
        post_ui = (
            <div className="home" style={{height: "360px"}}>
                <Parallax
                    blur={10}
                    bgImage={post.full_width_thumbnail}
                    bgImageAlt={post.title}
                    strength={300}
                    bgHeight='430px'
                >
                    <div style={{ height: '360px' }}>
                        <div className="home_content" >
                            <div className="post_category trans_200">
                                <Link onClick={this.forceUpdate} className="trans_200" to={"/articles/category/" + post.category.toLowerCase()}>{post.category}</Link>
                            </div>
                            <div className="post_title">{ post.title }</div>
                        </div>
                    </div>
                </Parallax>
                
            </div>
        )
    } else {
        post_ui = ""
    }
    return (
        <div>{ post_ui }</div>
    )
  }
}
