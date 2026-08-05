import {useState} from 'react';
import { useNavigate,Link } from 'react-router';
import {userLogin} from "../services/api";
import AdminDashboard from "../pages/AdminDashboard";
import UserDashboard from "../pages/UserDashboard";





export default function Login(){
  
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");


    async function  handleLogin(e){
        e.preventDefault();
        console.log("button clicked");
try{
    const data=await userLogin(email,password)
    console.log(data);
    localStorage.setItem("token",data.token);
    localStorage.setItem("user",JSON.stringify(data.user));
    if(data.user.role==="admin"){
        navigate("/admin-dashboard");
    }
    else

        {

            navigate("/user-dashboard");
        }
    }catch(error){
        setError(error.message);
    }
}
    return(
      <div className="login-container">
        <h3>Login</h3>
     <form onSubmit={handleLogin}>
        <label>Enter your email:</label><br></br>
       <input type="email" placeholder='Email' value={email} 
             onChange={(e)=>setEmail(e.target.value)} required/><br></br><br></br>
        <label>Enter your Password:</label><br></br>
       <input type="password" placeholder='Password' value={password}
             onChange={(e)=>setPassword(e.target.value)} required/><br></br>
       <button>Login</button><br></br><br></br>
       <p>Don't have an account?{""}
        <Link to ="/signup">SignUp</Link>
       </p>
    
    </form>
    </div>
  );

}
    