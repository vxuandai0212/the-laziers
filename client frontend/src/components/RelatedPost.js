import React, { Component } from 'react'
import CommentForm from './CommentForm';
import Comments from './Comments';
import SmallCardWithImage from './SmallCardWithImage';

import axios from 'axios';

export default class RelatedPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: '',
            posts: [],
            limit: 4,
            isLoading: true
        };
        this.init = this.init.bind(this);
        this.handleComment = this.handleComment.bind(this);
    }
    
    componentDidMount = () => {
        let category = this.props.category ? this.props.category : '';
        this.setState({ category: category }, () => {
            this.init();
        });
    }

    init() {
        axios.get(`http://localhost:3200/api/v1/posts`, {params: {
            limit: this.state.limit, category: this.state.category
        }})
        .then(res => {
            const posts = res.data.posts;
            this.setState({ ...this.state, posts, isLoading: false });
        })
    }
    
    handleComment(comment) {
        if (this.props.post_id) {
            axios.post(`http://localhost:3200/api/v1/comments`, {
                parent_id: this.props.post_id, parent_type: "post", comment_info: comment
            })
            .then(res => {
                window.location.reload();
            })
        }
    }

  render() {
    const { posts, isLoading } = this.state
    const post_id = this.props.post_id ? this.props.post_id : null
    let posts_ui
    if (!isLoading) {
        posts_ui = (
            posts.map((post) => 
                <SmallCardWithImage key={post._id} post={post}/>
            )
        )
    } else {
        posts_ui = <p>Loading...</p>
    }
    return (
        <div className="similar_posts">
            <div className="section_title">Related Posts</div>
            <div className="grid clearfix">
                { posts_ui }
            </div>
            { post_id && <CommentForm comment={this.handleComment} /> }
            { post_id && <Comments post_id={post_id} /> }
        </div>
    )
  }
}
