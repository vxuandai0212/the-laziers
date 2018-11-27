import React, { Component } from 'react'
import axios from 'axios';

export default class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post_id: null,
            comments: [],
            limit: 5,
            isLoading: true
        };
        this.init = this.init.bind(this);
    }
    
    componentDidMount = () => {
        let post_id = this.props.post_id ? this.props.post_id : '';
        this.setState({ post_id: post_id }, () => {
            this.init();
        });
    }

    init() {
        axios.get(`http://localhost:3200/api/v1/comments`, {params: {
            limit: this.state.limit, post_id: this.state.post_id
        }})
        .then(res => {
            const comments = res.data.comments;
            this.setState({ ...this.state, comments, isLoading: false });
        })
    }
  render() {
    const avatar = "https://protohack.com/wp-content/themes/protohack/extras/images/avatar_small.png"
    let { comments } = this.state
    let comments_ui
    if (comments.length === 0) {
        comments_ui = <div className="comments_title text-center">No comments</div>
    } else {
        let comments_list = comments.map((comment) => 
            <li key={comment._id} className="comment">
                <div className="comment_body">
                    <div className="comment_panel d-flex flex-row align-items-center justify-content-start">
                        <div className="comment_author_image"><div><img src={avatar} alt="Default avatar"/></div></div>
                        <small className="post_meta"><a href="javascript:;">{comment.name}</a><span>{comment.createdAt}</span></small>
                    </div>
                    <div className="comment_content">
                        <p>{comment.content}</p>
                    </div>
                </div>
            </li>
        )
        comments_ui = (
            <div>
                <div className="comments_title text-center">Comments <span>{comments.length}</span></div>
                <div className="row">
                    <div className="col-xl-8 mx-auto">
                        <div className="comments_container">
                            <ul className="comment_list">
                                { comments_list }
                            </ul>
                        </div>
                    </div>
                </div>	
            </div>
        )
    }
    return (
        <div className="comments">
            { comments_ui }
        </div>
    )
  }
}
