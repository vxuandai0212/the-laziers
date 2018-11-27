import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PostTag extends Component {
  render() {
    const tags = this.props.tags
    let tags_ui
    if (tags) {
        tags_ui = tags.split(',').map((tag) => 
            <li key={tag} className="post_tag"><Link to={"/articles/tag/" + tag}> {tag} </Link></li>
        )
    } else {
        tags_ui = <p>Loading..</p>
    }
    
    return (
        <div className="post_tags">
            <ul>
                { tags_ui }
            </ul>
        </div>
    )
  }
}
