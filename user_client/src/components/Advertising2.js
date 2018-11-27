import React, { Component } from 'react'

export default class Advertising2 extends Component {
  render() {
    return (
        <div className="sidebar_section">
            <div className="advertising_2">
                <div className="advertising_background" style={{backgroundImage:"url(" + require('./images/post_18.jpg') + ")"}}></div>
                <div className="advertising_2_content d-flex flex-column align-items-center justify-content-center">
                    <div className="advertising_2_link"><a href="index.html">Turbulent <span>Mind</span></a></div>
                </div>
            </div>
        </div>
    )
  }
}
