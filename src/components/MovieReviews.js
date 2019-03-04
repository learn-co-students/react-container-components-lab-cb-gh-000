import React from 'react';
import PropTypes from 'prop-types';

const MovieReviews = ({reviews}) => {
  return (
    <ul className="review-list">
    {
      reviews.map((review, i) => (
        <li key={i} className="review">
          <h2><a href={review.link.url} target="_blank">{review.display_title}</a></h2>
          <p>{review.summary_short}</p>
        </li>
      ))
    }
    </ul>
  );
}

export default MovieReviews;

MovieReviews.defaultProps = {
  reviews: [''],
}
