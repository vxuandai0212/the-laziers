import React, { Component } from 'react'
import ParallaxBanner from './ParallaxBanner';
import SlideBanner from './SlideBanner';



export default class Home extends Component {
  render() {
    let isPost = this.props.isPost
    let post = this.props.post
    let banner;
    if (post) {
      banner = <ParallaxBanner post={post} />
    } else {
      banner = <p>Loading...</p>
    }
    if (isPost) {
      return  <div>{banner}</div>
    } else {
      return <SlideBanner />
    }
  }
}

