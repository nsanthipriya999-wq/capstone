.review-container {
  padding: 2rem;
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.review-card {
  padding: 1.25rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.review-card h3 {
  margin-bottom: 0.5rem;
}

export default function GoogleReviews({ reviews }) {
  return (
    <div className="review-container">
      <h2>Customer Reviews</h2>

      <div className="reviews-grid">
        {reviews?.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className="review-card">
              <h3>{review.author}</h3>
              <p>{"⭐".repeat(review.rating)}</p>
              <p>{review.text}</p>
            </div>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
    </div>
  );
}