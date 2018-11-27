import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './HomePage';
import CategoryPosts from './CategoryPosts';
import TagPosts from './TagPosts';
import Post from './Post';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <Router>
          <div className="super_container">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/articles/category/:slug" component={CategoryPosts} />
              <Route path="/articles/tag/:slug" component={TagPosts} />
              <Route path="/articles/:slug" component={Post} />
            </Switch>
            <Footer />
          </div>
      </Router>
    )
  }
}
