//-----------------------authMiddleware.js----------------------------------------------------

import jwt from "jsonwebtoken";
import User from "../models/User.js";

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];  //converts the string into an array and takes the header at [1]

    if (!token) {

      return res.status(401).json({ message: "No token provided" });

    }
    //--------------------verify whether the token is valid or not--------------------

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id)            //find user from decoded token id
    if (!user) {
      return res.status(401).json({ message: "User not found" });

    }

    req.user = user;  //assign user to request object 

    next();              //continue to next middleware.(adminMiddleware)
  } catch (error) {

    return res.status(401).json({ message: "Invalid or expired token" });
  }

};
export default authMiddleware;




