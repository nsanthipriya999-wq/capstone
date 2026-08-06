 //----------------------adminMiddleware.js----------------------------------------------------

 const adminMiddleware=(req,res,next)=>{

    //---Checks for an authenticated user or else returns an error------
if(!req.user){
  return res.status(401).json({message:"Unauthorized"});
}

//--------------if user is not an admin,returns an error message----------
if(req.user.role!=="admin"){
    return res.status(403).json({message:"Access denied! Admin Only. "});}

    next(); //continue to the next middleware in case of an admin.
};

export default adminMiddleware;



