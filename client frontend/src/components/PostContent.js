import React, { Component } from 'react'
import TopPanel from './TopPanel';
import PostBody from './PostBody';
import BottomPanel from './BottomPanel';
import RelatedPost from './RelatedPost';

import _ from 'lodash';

export default class PostContent extends Component {
  render() {
    const post = this.props.post
    const top_panel = _.pick(post, ['createdAt', 'created_by']);
    const post_body = _.pick(post, ['content', 'tags']);
    const category = post ? post.category : null;
    const post_id = post ? post._id : null;
    return (
        <div className="col-lg-12">
            <div className="post_content">
                <TopPanel post={top_panel} />
                <PostBody post={post_body} />
                <TopPanel post={top_panel} />
                <RelatedPost post_id={post_id} category={category} />
            </div>
            { post && <div className="load_more">
                { post.comments.length > 0 ? <div id="load_more" className="load_more_button text-center trans_200">Load More</div> : "" }
            </div> }
        </div>
    )
  }
}
