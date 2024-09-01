import "../styles/ReviewCard.css";

export const ReviewCard = ({ review }) => {
  return (
    <div className="review__card">
      <div className="review__card__avatar">
        <img src={review.avatar} alt={review.name} />
      </div>
      <div className="review__card__content">
        <p>{review.review}</p>
      </div>
    </div>
  );
};

