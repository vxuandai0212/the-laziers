import React, { Component } from 'react'
import SliderItem from './SliderItem'
import axios from 'axios';
import OwlCarousel from 'react-owl-carousel2';

const  _ = require('lodash');
const uuidv4 = require('uuid/v4');

const options = {
    items: 1,
    rewind: true,
    autoplay: true,
    loop:true,
};

export default class SlideBanner extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts: [],
       limit: 15,
    }
  }

  componentDidMount = () => {
    axios.get(`http://localhost:3200/api/v1/posts`, {params: {limit: this.state.limit}})
      .then(res => {
        const posts = res.data.posts;
        this.setState({ posts });
      })
  }
  
  
  render() {
    let slides_chunk = _.chunk(this.state.posts, 5);
    let slides = slides_chunk.map((posts) => 
        <SliderItem key={uuidv4()} posts={posts}/>
    );
    return (
        <div className="home">
            <div className="home_slider_container">
                {this.state.posts.length > 0 ? 
                    <OwlCarousel
                        options={options}
                        className="owl-carousel owl-theme home_slider"
                    >
                        {slides}
                    </OwlCarousel>
                : ""}
            </div>
        </div>
    )
  }
}
