// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    const searchTerm = ev.target.value;

    if (searchTerm.length > 2) {
      fetch(URL)
        .then(reponse => response.json())
        .then(reviews => this.setState({reviews: reviews.results, searchTerm}))
        .catch((error) => console.log(error));
    } else {
      this.setState({reviews: [], searchTerm});
    }
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <input type="text" value={this.state.search} onChange={this.handleChange} />
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
