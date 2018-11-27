import React, { Component } from 'react'

export default class MoreCategory extends Component {
    chooseCategory(category) {
        this.props.chooseCategory(category);
    }
  render() {
    let more_categories = [
        {value: "entertainment", name: "Entertainment"},
        {value: 'politics', name: 'Politics'},
        {value: "world", name: "World"},
        {value: "business", name: "Business"},
        {value: "life", name: "Life"},
        {value: "style", name: "Style"}
    ]
    const navMore = more_categories.map((item) => 
        <li onClick={this.chooseCategory.bind(this, item.value)} key={item.value}>
            <a href="javascript:;">{item.name}</a>
        </li>
    );
    return (
        <ul>
            {navMore}
        </ul>
    )
  }
}
