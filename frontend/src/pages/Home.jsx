/*----------------------------HomePage.jsx---------------------*/
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { getActivePromotion } from "../services/api";
import cw from "../assets/cw.jpg";
import GoogleReviews from "../components/GoogleReviews";
export default function Home() {

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
        <div className="home">
        
            {/*----------------------------------Hero Section--------------------------*/}
            <section className="hero">
                <img src={cw} alt="car wash image" className="hero-image"/>
               <div className="hero-content">
                <h2>
                    🚗 Wash N Go
                </h2>
                <h3>
                    Fast Service. <span>Premium Care.</span>
                </h3>

                <p>
                    Experience convenient, professional
                    and Fast exterior express car cleaning
                    services with Wash N Go.

                </p>

                <Link to="/services" className="home-btn">
                    Book Now 🚗
                </Link>
                </div>
                </section>
                    <section className="features">

                        <h2>
                            Why Choose Wash N Go ?
                        </h2>

                        <div className="feature-container">
                            <div className="feature-card">
                                🫧
                                <h3>
                                  
                                 Quality Car Wash.

                                </h3>
                                <p>

                                    Professional cleaning that keeps your car shining.

                                </p>


                            </div>

                            <div className="feature-card">
                                 🧼
                                <h3>
                                    Spotless Cleaning
                                </h3>
                                <p>
                                    Remove dirt and restore your vehicle's freshness.
                                </p>
                            </div>
                            <div className="feature-card">
                                ✨
                                <h3>
                                    Premium Care
                                </h3>
                                <p>
                                    Reliable service with excellent results
                                </p>
                            </div>

                        </div>

                    </section>


                    {/*-------------------------------sections---------------------------------------*/}
                    <section className="home-section">
                        <h2>Our Services</h2>

                        <p>Explore our car wash packages and choose the
                            service that fits your needs.</p>

                        <Link to="/services" className="home-btn">
                            View Services
                        </Link>

                    </section>


                    {/*-----------Active Promotions-------------*/}


                    <section className="promotion-section">
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

                                <Link to="/promotions" className="home-btn">
                                    View Promotion
                                </Link>

                            </div>
                        ) : (

                            <p>No Active Promotions Available.
                                Please come back!
                            </p>


                        )}


                    </section>
                    {/*---------------------Reviews--------------------------*/}

                    <section className="review-section">

                        <h2>
                            Want to know what people say about us!
                        </h2>
                        

                        
                            <GoogleReviews />
                        </section>


                    {/*---------------------contact---------------------------*/}

                    <section className="home-section">

                        <h2>
                            Need Help?
                        </h2>
                        <p>
                            Contact Wash N Go for questions or support.
                        </p>

                        <Link to="/contact"
                            className="home-btn">
                            Contact Us
                        </Link>

                    </section>
                



            




        </div>






    );


}



