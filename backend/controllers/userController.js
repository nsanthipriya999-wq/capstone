//-------------------Wash n go User Controller--------------------------------------------------------
import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


// -----------POST http://localhost:3000/register------------------
export const registerUser = async (req, res) => {
    
    try {
       
        console.log(req.body);

        const{
            name,email,password,role
        } =req.body;

  //----------Validation of fields--------------------
  if(!name || !email || !password){
    return res.status(400).json({message:"Name,email and password are required"});
  }
     
  //---------check if user exists---------------------
  const userFound=await User.findOne({email});
        if(userFound){
            return res.status(400).json({message:"User already exists"});
        }

    //---------------Hashing Paswword-------------------
        const hashedPassword = await bcrypt.hash(password,10);
        
    //----------------Create user-----------------------------    
        const user=await User.create({
            name,email,password:hashedPassword,role
        });
        res.status(201).json({message:"User registered successfully", 
            user:
            {
             id:user._id,
             name:user.anme,
             email:user.email,
             role:user.role   
            }
        });
       
    } catch (err) {

        return res.status(500).json({ message: err.message });
    }
};

//----------------- POST http://localhost:3000/loginUser
export const loginUser = async (req, res) => {
    
    try {

        console.log(req.body);
        const {email,password}=req.body;

        //----------find user by email----------------
        const userFound= await User.findOne({email});
        if(!userFound){
             return res.status(400).json({message:"Invalid Credentials"});
        }
//----------compare password-----------------
        const match=await bcrypt.compare(password,userFound.password);
         
        if(!match){
             return res.status(400).json({message:"Invalid Credentials"});
        }


        //----------------check JWT secret-----
        if(!process.env.JWT_SECRET){
            throw new Error("JWT_Secret is missing");
        }


        //--------------create token---------------------
     const token=jwt.sign(
{        id:userFound._id,
        role:userFound.role},

process.env.JWT_SECRET,{
    expiresIn:"1d"        //one day
}

     );
        
        
    res.status(200).json({message:"Login Successful",token,
        user:{
            id:userFound._id,
            name:userFound.name,
            email:userFound.email,
            role:userFound.role
        }
    });
    } catch (err) {

        return res.status(500).json({ error: err.message });
    }
};