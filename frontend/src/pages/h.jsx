
import { useEffect, useState } from "react";
import { Link } from "react-router";


export default function Home() {

  const [promotion, setPromotion] = useState(null);

  useEffect(() => {

    fetch("http://localhost:3000/promotions/active")
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setPromotion(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);


  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-content">

          <h1>
            🚗 Wash N Go
          </h1>

          <h2>
            Clean Car. <span>Fresh Shine.</span>
          </h2>

          <p>
            Experience convenient and professional car wash
            services designed for your vehicle.
          </p>


          <Link to="/services" className="home-btn">
            Book Now 🚗
          </Link>

        </div>

      </section>



      {/* Why Choose Us */}
      <section className="features">

        <h2>
          Why Choose Wash N Go?
        </h2>


        <div className="feature-cards">

          <div className="feature-card">
            🚗
            <h3>
              Quality Wash
            </h3>
            <p>
              Professional cleaning that keeps your car shining.
            </p>
          </div>


          <div className="feature-card">
            🧼
            <h3>
              Deep Cleaning
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
              Reliable service with excellent results.
            </p>
          </div>


        </div>

      </section>



      {/* Services Section */}
      <section className="home-section">

        <h2>
          Our Services
        </h2>

        <p>
          Explore our car wash packages and choose the
          service that fits your needs.
        </p>


        <Link to="/services" className="home-btn">
          View Services
        </Link>


      </section>




      {/* Active Promotion Section */}
      <section className="promotion-section">

        <h2>
          🔥 Latest Promotion
        </h2>


        {promotion ? (

          <div className="promotion-card">

            <h3>
              {promotion.title}
            </h3>

            <p>
              {promotion.description}
            </p>


            <h2 className="discount">
              {promotion.discount}% OFF
            </h2>


            <Link 
              to="/promotions" 
              className="home-btn"
            >
              View Promotion
            </Link>


          </div>

        ) : (

          <p>
            No active promotions available.
          </p>

        )}


      </section>





      {/* Contact Section */}
      <section className="home-section">

        <h2>
          Need Help?
        </h2>


        <p>
          Contact Wash N Go for questions or support.
        </p>


        <Link 
          to="/contact" 
          className="home-btn"
        >
          Contact Us
        </Link>


      </section>



    </div>
  );
}
