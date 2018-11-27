import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    let isCategory = this.props.pageType === 'category';
    let category = this.props.category ? this.props.category : '';
    let main_nav = [
        {url: "/", value: "", name: "Home"},
        {url: "/articles/category/world", value: "world", name: "World"},
        {url: "/articles/category/business", value: "business", name: "Business"},
        {url: "/articles/category/life", value: "life", name: "Life"},
        {url: "/articles/category/style", value: "style", name: "Style"},
        {url: "/articles/category/entertainment", value: "entertainment", name: "Entertainment"}
    ]
    const navItems = main_nav.map((item) =>
        <li key={item.name} className={category === item.value ? 'active' : ''}><Link onClick={this.forceUpdate} to={item.url}>{item.name}</Link></li>
    );
    return (
        <header className="header" style={{background: isCategory ? 'black' : ''}}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="header_content d-flex flex-row align-items-center justify-content-start">
                            <div className="logo"><Link onClick={this.forceUpdate} to="/">TheLaziers</Link></div>
                            <nav className="main_nav">
                                <ul>
                                    {navItems}
                                </ul>
                            </nav>
                            <div className="search_container ml-auto">
                                <form action="index.html">
                                    <input type="search" className="header_search_input" required="required" placeholder="Type to Search..." />
                                    <img className="header_search_icon" src="images/search.png" alt="" />
                                </form>
                            </div>
                            <div className="hamburger ml-auto menu_mm">
                                <i className="fa fa-bars trans_200 menu_mm" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
  }
}
