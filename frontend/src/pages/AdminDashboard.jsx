export default function AdminDashboard(){

const user=JSON.parse(localStorage.getItem("user"));


return(
<div className="admin-container">
   <h2>Welcome Admin! </h2>

   <p>Manage Wash N Go Operations</p>

   <a href="https://dashboard.everwash.com/#"
       target="_blank"
        rel="nopener noreferer" >

        EverWash App </a>




</div>






);



}