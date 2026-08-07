/*-------------------Login.jsx----------------------------*/

import {useState} from 'react';
import { useNavigate,Link } from 'react-router';
import {userLogin} from "../services/api";


export default function Login(){
  
    const navigate=useNavigate();

    //----------state variables-----------------
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");


    async function  handleLogin(e){
        e.preventDefault();
        setError("");

try{
    const data=await userLogin(email,password);

    //---------save admin token----------------
    localStorage.setItem("token",data.token);
    localStorage.setItem("user",JSON.stringify(data.user));
    
    //---------navigate according to the role--------
    if(data.user.role==="admin")
        {
        navigate("/admin-dashboard");
    }
    else
        {
            navigate("/user-dashboard");
        }
    }catch(error){
        setError(error.message || "Invalid Credentials");
    }
}
    return(
      <div className="login-container">
        <h3>Login</h3>
        {error && (
          <p style={{color:"red",marginBottom :"10px"}}>{error}</p>

        )}
     <form onSubmit={handleLogin}>
        
        <label>Enter your Email:</label><br></br>
       <input type="email" placeholder='Email' value={email} 
             onChange={(e)=>setEmail(e.target.value)} required/><br></br><br></br>
        <label>Enter your Password:</label><br></br>
       <input type="password" placeholder='Password' value={password} minLength={6}
             onChange={(e)=>setPassword(e.target.value)} required/><br></br>

       <button type="submit">Login</button><br></br><br></br>
       {/* <p>Don't have an account?{""}
        <Link to ="/signup">SignUp</Link>
       </p>
     */}
      </form>
       <p>Are you a Wash N Go customer?{" "}
        <Link to ="/signup">Click here to Join/Login Membership</Link>
       </p>
     


   
    </div>
  );

}
    