import React, { Component } from 'react'
import TopStoriesSliderItem from './TopStoriesSliderItem';

export default class TopStoriesSlider extends Component {
  render() {
    return (
        <div className="sidebar_slider_container">
            <div className="owl-carousel owl-theme sidebar_slider_top">
                <TopStoriesSliderItem />
                <TopStoriesSliderItem />
                <TopStoriesSliderItem />
            </div>
		</div>
    )
  }
}
