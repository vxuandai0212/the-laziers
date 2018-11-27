import React, { Component } from 'react'
import TopStories from './TopStories';
import Advertising1 from './Advertising1';
import Advertising2 from './Advertising2';

export default class SideBar extends Component {
  render() {
    return (
        <div className="col-lg-3">
            <div className="sidebar">
                <div className="sidebar_background"></div>
                <TopStories />
                <Advertising1 />
                <Advertising2 />
            </div>
		</div>
    )
  }
}
