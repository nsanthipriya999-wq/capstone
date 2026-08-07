import Services from "../pages/Services.jsx";
import { Link } from "react-router";

export default function UserDashboard() {
  return (
    <div className="user-container">
      <div className="user-cards">
       <h2> Welcome to User Dashboard !</h2>
        <div className="user-card">
          <h3>Manage your Wash N Go services and track your activity from your dashboard.</h3>
        </div>
        <div className="user-card">
          <p>Explore our car wash packages and choose the
            service that fits your needs.</p>
          <Link to="/services" className="home-btn">
            View Services
          </Link>
        </div>
      </div>
    </div>
  )
}