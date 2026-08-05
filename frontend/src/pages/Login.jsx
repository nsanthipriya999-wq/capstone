import {useState} from 'react';
import { useNavigate,Link } from 'react-router';
import {userLogin} from "./Services/api.js";





export default function Login(){
  
    const navigate=useNavigate();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [error,setError]=useState();


    async function  handleLogin(e){
        e.preventDefault();
try{
    const data=await userLogin(email,password)
    
    localStorage.setItem("token",data.token);
    localStorage.setItem("user",JSON.stringify(data.user));
    if(data.user.role==="admin"){
        navigate("/admin");
    }
    else

        {

            navigate("/dashboard");
        }
    }catch(error){
        setError(error.message);
    }
}
    return(
      


        <div>Login</div>
    )
}