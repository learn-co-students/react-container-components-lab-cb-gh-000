import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'ae284ba66ee24df2b5bd970c59750cfa';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends React.Component{
  constructor(){
    super();

    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(res => this.setState({ reviews: res.results }));
  }



  render(){
    return (
        <div className='latest-movie-reviews'>
          <MovieReviews reviews={this.state.reviews}/>
        </div>
    )
  }


}
