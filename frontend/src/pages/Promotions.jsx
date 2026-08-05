
//import Promotion from "../pages/Promotions.jsx"
import {useState,useEffect} from "react";
import {Link} from "react-router";
import { getActivePromotion } from "../services/api";
export default function Promotions() {
  const [promotion, setPromotion] = useState(null);
  
      async function getPromotion() {
          const data = await getActivePromotion();
          if (data && data.length > 0)
              setPromotion(data[0]);
      }
      useEffect(() => {
          getPromotion();
      }, []);
  

  return (



    <div className="promotion-section">
      <h2>
        🔥 Latest Promotion
      </h2>

      {promotion ? (
        <div className="promotion-card">
          <h3>{promotion.title}</h3>
          <p>{promotion.description}</p>
          <h2 className="discount">
            {promotion.discount}% OFF
          </h2>

          <Link to="/signup" className="home-btn">
            Book Now
          </Link>

        </div>
      ) : (

        <p>No Active Promotions Available.
          Please come back!
        </p>


      )}
    </div>
  )


}