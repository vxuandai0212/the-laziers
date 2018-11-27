import React, { Component } from 'react'
import LargeCardWithBackground from './LargeCardWithBackground';
import LargeCardWithImage from './LargeCardWithImage';
import DefaultCardWithImage from './DefaultCardWithImage';
import DefaultCardWithBackground from './DefaultCardWithBackground';
import DefaultCardNoImage from './DefaultCardNoImage';

export default class BlogSectionTrendingContent extends Component {
  render() {
    return (
        <div className="section_content">
            <div className="grid clearfix">
                <LargeCardWithBackground />
                <LargeCardWithImage />
                <DefaultCardWithImage />
                <DefaultCardWithBackground />
                <DefaultCardNoImage />
                <DefaultCardNoImage />
                <DefaultCardWithBackground />
            </div>
        </div>
    )
  }
}
