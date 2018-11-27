import React, { Component } from 'react'
import BlogSectionLastestContent from './BlogSectionLastestContent';

export default class BlogSectionLastest extends Component {
  render() {
    return (
        <div className="blog_section">
            <div className="section_panel d-flex flex-row align-items-center justify-content-start">
                <div className="section_title">Latest Articles</div>
            </div>
            <BlogSectionLastestContent />
        </div>
    )
  }
}
