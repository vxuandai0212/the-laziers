import React, { Component } from 'react';
import Header from './components/Header'
import Menu from './components/Menu'
import Home from './components/Home'
import PageContent from './components/PageContent'
import './components/styles/main_styles.css'
import './components/styles/responsive.css'

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Home isPost={false} />
        <PageContent isPost={false} />
      </div>
    );
  }
}

export default HomePage;
