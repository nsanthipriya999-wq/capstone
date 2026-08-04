import { Link } from "react-router";
import car from "../assets/car.jpg";
import {MdLogin} from "react-icons/md";


//--------------Navigation Component--------------------
export default function Nav() {

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="brand">
          
           <img src={car} 
                alt="Wash n Go Logo" width="20%" 
                className="logo"/>
          <div className="brand-text">
          <h2 className="logo">
                Wash N Go 
          </h2>
          
          <p className="subtitle">
          Where Clean Meets Shine✨
          
          </p>
          </div>
        </div>
        
        {/* //-------------------Home ----------------------------- */}

        <div className="nav-links">
          <Link
            to="/"
            className="nav-link"
          >
            Home
          </Link>
          {/* //-------------------Services--------------------------- */}

          <Link
            to="/services"
            className="nav-link"

          >
            Services
          </Link>

          {/* //-------------------Promotions---------------------------- */}
          <Link
            to="/promotions"
            className="nav-link"

          >
            Promotions
          </Link>

          {/* //-------------------About--------------------------- */}
          <Link
            to="/about"
            className="nav-link"
          >
            About
          </Link>

          {/* //-------------------Contact Us---------------------------- */}
          <Link
            to="/contact"
            className="nav-link"
          >
            Contact
          </Link>

          {/*----Login-------------------------------------------*/}
            {/* //-------------------Contact Us---------------------------- */}
          <Link
            to="/login"
            className="nav-link"
          >
             <MdLogin size={15} style={{marginRight:"5px"}} />
             Login
          </Link>

        </div>

      </div>
    </nav>
  );
}