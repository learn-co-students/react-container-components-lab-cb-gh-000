import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            reviews: [],
            searchTerm:'',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ searchTerm: e.target.value });
      }
    
      handleSubmit(e) {
        e.preventDefault();
        fetch(URL.concat(this.state.searchTerm))
          .then(res => res.json())
          .then(res => this.setState({ reviews: res.results }));
      }

    render(){
        return(
            <div className="searchable-movie-reviews">
            <form onSubmit={this.handleSubmit}>
            <input type='text' value={this.state.searchTerm} onChange={this.handleChange}/>
            <button type="submit">Submit</button>
            </form>
            <MovieReviews reviews={this.state.reviews} />
            </div>
        );
    }

}

export default SearchableMovieReviewsContainer;