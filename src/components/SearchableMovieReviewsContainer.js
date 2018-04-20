// Code SearchableMovieReviewsContainer Here
import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'ae284ba66ee24df2b5bd970c59750cfa';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`
            + '&query=';

export default class SearchableMovieReviewsContainer extends React.Component{
  constructor(){
    super();

    this.state = {
      reviews: [],
      searchTerm: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(ev){
    this.setState({
      searchTerm: ev.target.value
    })
  }

  handleSubmit(){
    fetch(URL+this.searchTerm)
      .then(response => response.json())
      .then(res => this.setState({ reviews: res.results }));
  }


  render(){
    return (
        <div className='searchable-movie-reviews'>
          <input type='text' value={this.state.searchTerm} onChange={this.handleChange}/>
          <button onClick={this.handleSubmit}>Search</button>
          <MovieReviews reviews={this.state.reviews}/>
        </div>
    )
  }

}
