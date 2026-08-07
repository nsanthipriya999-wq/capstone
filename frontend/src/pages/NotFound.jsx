//----------------------Not Found Page -----------------------------
import { Link } from "react-router";
//-----------------Routes other than existing routes redirects to NotFound page---------------------
export default function NotFound() {
  return (
    <div className="notfound-container">
    <div className="notfound-card">
      <h1>404</h1>
      <p>Page not found.</p>
      <Link to="/">Return to Home</Link>
    </div>
    </div>
  );
}