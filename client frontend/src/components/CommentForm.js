import React, { Component } from 'react'

export default class CommentForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: '',
         email: '',
         content: ''
      }

      this.handleName = this.handleName.bind(this);
      this.handleEmail = this.handleEmail.bind(this);
      this.handleComment = this.handleComment.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleName(event) {
        this.setState({name: event.target.value});
    }

    handleEmail(event) {
        this.setState({email: event.target.value});
    }

    handleComment(event) {
        this.setState({content: event.target.value});
    }

    handleSubmit() {
        this.props.comment(this.state)
    }

  render() {
    return (
        <div className="post_comment">
            <div className="post_comment_title text-center">Post Comment</div>
            <div className="row">
                <div className="col-xl-8 mx-auto">
                    <div className="post_comment_form_container">
                        <input value={this.state.name} onChange={this.handleName} type="text" className="comment_input comment_input_name" placeholder="Your Name" required="required"/>
                        <input value={this.state.email} onChange={this.handleEmail} type="email" className="comment_input comment_input_email" placeholder="Your Email" required="required"/>
                        <textarea value={this.state.content} onChange={this.handleComment} className="comment_text" placeholder="Your Comment" required="required"></textarea>
                        <button onClick={this.handleSubmit} className="comment_button">Post Comment</button>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
