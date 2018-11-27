import React, { Component } from 'react'
import TopStoriesSlider from './TopStoriesSlider';

export default class TopStories extends Component {
  render() {
    return (
        <div className="sidebar_section">
            <div className="sidebar_title_container">
                <div className="sidebar_title">Top Stories</div>
                <div className="sidebar_slider_nav">
                    <div className="custom_nav_container sidebar_slider_nav_container">
                        <div className="custom_prev custom_prev_top">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                width="7px" height="12px" viewBox="0 0 7 12" enableBackground="new 0 0 7 12" xmlSpace="preserve">
                                <polyline fill="#bebebe" points="0,5.61 5.609,0 7,0 7,1.438 2.438,6 7,10.563 7,12 5.609,12 -0.002,6.39 "/>
                            </svg>
                        </div>
                        <ul id="custom_dots" className="custom_dots custom_dots_top">
                            <li className="custom_dot custom_dot_top active"><span></span></li>
                            <li className="custom_dot custom_dot_top"><span></span></li>
                            <li className="custom_dot custom_dot_top"><span></span></li>
                        </ul>
                        <div className="custom_next custom_next_top">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                width="7px" height="12px" viewBox="0 0 7 12" enableBackground="new 0 0 7 12" xmlSpace="preserve">
                                <polyline fill="#bebebe" points="6.998,6.39 1.389,12 -0.002,12 -0.002,10.562 4.561,6 -0.002,1.438 -0.002,0 1.389,0 7,5.61 "/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sidebar_section_content">
                <TopStoriesSlider />
            </div>
		</div>
    )
  }
}
