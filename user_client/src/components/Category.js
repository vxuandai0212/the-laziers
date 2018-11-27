import React, { Component } from 'react'

export default class Category extends Component {
    chooseCategory(category) {
        this.props.chooseCategory(category);
    }
  render() {
    let category = this.props.category;
    let categories= [
        {value: "", name: "All"},
        {value: 'tech', name: 'Tech'},
        {value: 'books', name: 'Books'},
        {value: 'food', name: 'Food'},
        {value: 'travel', name: 'Travel'}  
    ];
    const navItems = categories.map((item) =>
        <li onClick={this.chooseCategory.bind(this, item.value)}  key={item.value} className={category === item.value ? 'active' : ''}>
            <a href="javascript:;">{item.name}</a>
        </li>
    );
    return (
        <ul>
            {navItems}
        </ul>
    )
  }
}
