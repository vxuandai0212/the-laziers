import React, { Component } from 'react'

export default class Advertising1 extends Component {
  render() {
    return (
        <div className="sidebar_section">
            <div className="advertising">
                <div className="advertising_background" style={{backgroundImage:"url(" + require('./images/post_17.jpg') +")"}}></div>
                <div className="advertising_content d-flex flex-column align-items-start justify-content-end">
                    <div className="advertising_perc">-15%</div>
                    <div className="advertising_link"><a href="index.html">How Did van Gogh’s Turbulent Mind</a></div>
                </div>
            </div>
        </div>
    )
  }
}
