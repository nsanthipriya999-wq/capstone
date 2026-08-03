import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './db.js';
import washRoutes from './routes/user.js'
  connectDB();
const app = express();
const port = process.env.PORT || 3000;

//------------------------ allow requests from frontend-------------------------------
app.use(cors());

//----------------------- Parsing incoming data to json------------------------------------
app.use(express.json());

//------------------------------- bring in the  Wash n Go  routes---------------------------------
app.use('/', (req,res)=>{
    res.send("washnGo is running!");
});
// start the server
app.listen(port, () => {
    console.log('Listening on port: ', port);
  
})