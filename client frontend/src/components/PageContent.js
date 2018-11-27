import React, { Component } from 'react'
import MainContent from './MainContent';
import SideBar from './SideBar';
import PostContent from './PostContent';

export default class PageContent extends Component {
  render() {
    let isCategory = this.props.pageType === 'category';
    let category = this.props.category;
    let isPost = this.props.isPost;
    let main;
    let post = this.props.post
    if (isPost) {
        main = <PostContent post={post} />;
    } else {
        main = <MainContent category={category} isCategory={isCategory}/>
    }
    return (
        <div className="page_content" style={{marginTop: isCategory ? '70px' : '0'}}>
            <div className="container">
                <div className="row row-lg-eq-height">
                    {main}
                </div>
            </div>
        </div>
    )
  }
}
