import { Link } from "react-router";
import car from "../assets/car.jpg"


//--------------Navigation Component--------------------
export default function Nav() {

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="brand">
          
           <img src={car} 
                alt="Wash n Go Logo" 
                className="logo"/>

          <h1 className="logo">
                Wash N Go Car Wash
          </h1>
          <p className="subtitle">
              where Clean meets Shine
          </p>
        </div>
        {/* //-------------------Home ----------------------------- */}

        <div className="nav-links">
          <Link
            to="/"
            className="nav-link"
          >
            🏠 Home
          </Link>
          {/* //-------------------Services--------------------------- */}

          <Link
            to="/services"
            className="nav-link"

          >
            🧼Services
          </Link>

          {/* //-------------------Promotions---------------------------- */}
          <Link
            to="/promotions"
            className="nav-link"

          >
            🎁Promotions
          </Link>

          {/* //-------------------About--------------------------- */}
          <Link
            to="/about"
            className="nav-link"
          >
            🚗About
          </Link>

          {/* //-------------------Contact Us---------------------------- */}
          <Link
            to="/contactus"
            className="nav-link"
          >
            📞ContactUs
          </Link>

        </div>

      </div>
    </nav>
  );
}