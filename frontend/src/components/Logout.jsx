//----------------------------------------Logout.jsx---------------------------------

import { useNavigate } from "react-router";

export default function Logout() {

    const navigate = useNavigate();

    function handleLogout() {
        //---remove login credentials and token issued---------

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        //---------redirect to Login page----
        navigate("/login")
    }
    return (
        <div>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
    );
}
