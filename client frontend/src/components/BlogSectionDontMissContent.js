import React, { Component } from 'react'
import LargestCardWithImage from './LargestCardWithImage';
import SmallCardWithoutImage from './SmallCardWithoutImage';
import SmallCardWithBackground from './SmallCardWithBackground';
import SmallCardWithImage from './SmallCardWithImage';
import DefaultCardNoImage from './DefaultCardNoImage';

export default class BlogSectionDontMissContent extends Component {  
  render() {
    const posts = this.props.dm_posts;
    return (
        <div className="section_content">
            <div className="grid clearfix">
                { posts[0] && <LargestCardWithImage post={posts[0]} /> }
                { posts[1] && <SmallCardWithoutImage post={posts[1]} />} 
                { posts[2] && <SmallCardWithBackground post={posts[2]} /> }
                { posts[3] && <SmallCardWithImage post={posts[3]}/> }
                { posts[4] && <SmallCardWithImage post={posts[4]} /> }
            </div>
		    </div>
    )
  }
}
