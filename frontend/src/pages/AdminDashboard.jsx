export default function AdminDashboard(){

const user=JSON.parse(localStorage.getItem("user"));


return(
<div className="admind-container">
   <h2>Welcome Admin </h2>

   <p>Manage Wash n Go Operations</p>

   <a href="https://dashboard.everwash.com/#"
       target="_blank"
        rel="nopener no referer" >

        EverWash App </a>




</div>






);



}