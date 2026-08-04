//-----------------------db.js------------------------------------
import mongoose from 'mongoose';
async function connectDB(){
    try{
         await mongoose.connect(process.env.MONGO_URL);
         console.log('connected to MongoDb');
    }catch(e){
        console.log(e);
    }
}
export default connectDB;