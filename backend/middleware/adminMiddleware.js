 const adminMiddleware=(req,res,next)=>{

    //---if user is not admin returns an error------
if(!req.user){
  return res.status(401).json({message:"Unauthorized"});
}

if(req.user.role!=="admin"){
    return res.status(403).json({message:"Access denied! Admin Only. "});}

next();
};


export default adminMiddleware;



