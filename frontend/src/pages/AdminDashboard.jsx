import {Navigate} from "react-router";
import Logout from "../components/Logout";

export default function AdminDashboard(){

const user=JSON.parse(localStorage.getItem("user"));

//---additional check in case user is not admin--
if(!user || user.role!=="admin"){
  return <Navigate to ="/" replace />;
}

return(
<div className="admin-container">
   <h2>
    Welcome <span className="admin-text">Admin 🤵🏻‍♂️<div className=""></div></span>
</h2> 
   
   <p>Manage Wash N Go Operations</p>

   <a href="https://dashboard.everwash.com/#"
       target="_blank"
        rel="nopener noreferer" >

        Open EverWash Dashboard </a>
      <br /><br />
      <Logout />


</div>






);



}