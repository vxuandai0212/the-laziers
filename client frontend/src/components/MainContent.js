import React, { Component } from 'react'
import BlogSectionDontMiss from './BlogSectionDontMiss';
import BlogSectionTrending from './BlogSectionTrending';
import BlogSectionLastest from './BlogSectionLastest';

export default class MainContent extends Component {
  render() {
    let isCategory = this.props.isCategory;
    let blog;
    let category = this.props.category;
    if (isCategory) {
      blog = (
        <div className="main_content">
          <BlogSectionDontMiss category={category} isCategory={isCategory} />
        </div>
      )
    } else {
      blog = (
        <div className="main_content">
          <BlogSectionDontMiss />
          {/* <BlogSectionTrending /> */}
          <BlogSectionLastest />
        </div>
      )
    }
    return (
      <div className="col-lg-12">
					{blog}
					<div className="load_more">
						<div id="load_more" className="load_more_button text-center trans_200">Load More</div>
					</div>
			</div>
    )
  }
}
