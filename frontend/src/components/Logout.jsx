
import { useNavigate } from "react-router";

export default function Logout(){

    const navigate=useNavigate();

         function handleLogout(){
            //---remove login credentials and token issued---------

            localStorage.removeItem("token");
            localStorage.removeItem("user");

            //---------redirect to Home page----
            navigate("/")
         }
            return (
                <div>
                <button onClick={handleLogout}>Logout</button>
                </div>
            );
          }
        