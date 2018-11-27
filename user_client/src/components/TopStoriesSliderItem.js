import React, { Component } from 'react'
import SidePost from './SidePost';

export default class TopStoriesSliderItem extends Component {
  render() {
    return (
        <div className="owl-item">
            <SidePost />
            <SidePost />
            <SidePost />
            <SidePost />
        </div>
    )
  }
}
