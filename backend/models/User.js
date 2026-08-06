
//-----------User Schema--------------------------
import mongoose from 'mongoose';
const userSchema = new mongoose.Schema(
    {

        name: {
            type: String,
            required: true,
            trim: true,
        },


        email: {              //index is created on email 

            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },

        role: {
            type: String,
            enum: ["admin", "customer"],
            default: "customer"                       //at present customers are handled by EverWash
        },

    },

    { timestamps: true, }




);


const User = mongoose.model('user', userSchema);
export default User;