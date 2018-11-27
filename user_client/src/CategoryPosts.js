import React, { Component } from 'react';
import Header from './components/Header'
import Menu from './components/Menu'
import PageContent from './components/PageContent'

class CategoryPosts extends Component {
  render() {
    let category = this.props.match.params.slug
    return (
      <div>
        <Header category={category} pageType="category" />
        <Menu />
        <PageContent category={category} pageType="category"/>
      </div>
    );
  }
}

export default CategoryPosts;
