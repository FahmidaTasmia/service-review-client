import React from 'react';

const ReviewItem = ({review}) => {
    return (
        <div>
            <h4>{review?.name}</h4>
            <h4>{review?.rating +".0"}</h4>
            <h4>{review?.review}</h4>
        </div>
    );
};

export default ReviewItem;