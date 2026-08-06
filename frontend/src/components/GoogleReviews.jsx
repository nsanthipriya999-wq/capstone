
//---------------------------------GoogleReviews.jsx-----------------------------------------------------*/
import reviews from "../data.js";           //reviews data file
export default function GoogleReviews() 
{
    return (
        <div className="review-container">
            <h2>Customer Reviews</h2>
            <div className="review-cards">
                {reviews.map((review) => (
                    <div key={review.name} className="review-card">    
                        <h3>{review.name}</h3>
                        <p>{review.rating}</p>
                        <p>{review.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}