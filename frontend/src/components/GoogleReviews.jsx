
//---------------------------------GoogleReviews.jsx-----------------------------------------------------*/
import reviews from "../data.js";           //reviews data file
export default function GoogleReviews() 
{
    return (
        <div className="review-container">
            <h2>Want to know what people say about us!</h2>
            <h3>Customer Reviews</h3>
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