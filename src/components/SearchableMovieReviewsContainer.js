import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

export default class SearchableMovieReviewsContainer extends Component {
	constructor(){
		super();
		
		this.state = {
			reviews: [],
			searchTerm: ''
		}
		
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(ev){
		const searchTerm = ev.target.value;
		
		const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
		const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json'
            + `?api-key=${NYT_API_KEY}`
		        + `&query=${this.state.searchTerm}`;
		
		if(searchTerm.length > 2) {
			fetch(URL)
				.then(response => response.json())
				.then(reviews => this.setState({reviews: reviews.results, searchTerm}))
				.catch((error) => console.log(error))
		}
		else {
			this.setState({reviews: [], searchTerm});
		}
		
		this.setState({reviews: [], searchTerm});
	}
	
	
	render() {
		return(
			<div className="searchable-movie-reviews">
					<input type='text' value={this.state.search} onChange={this.handleChange}/>
					<h1>Results of search: {this.state.searchTerm}</h1>
					<MovieReviews reviews={this.state.reviews} />
			</div>
		)
	}
	
}