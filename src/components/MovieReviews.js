import React from 'react';

const MovieReviews = props => {
    return (
        <table className="review-list">
          <tbody>
        {props.reviews.map((review, index) => (
          <tr key={index} className="review">
            <td>
              <h4><b>{review.display_title}</b></h4>
              <p>{review.summary_short}</p>
              <p><a href={review.link.url} target="_blank"><i>{review.link.suggested_link_text}</i></a></p>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    );
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
