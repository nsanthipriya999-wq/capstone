
//------------Promotion Schema--------------------------------//

import mongoose from 'mongoose';
const promotionSchema = new mongoose.Schema(
    {

        title: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            required: true,
            trim: true,
        },

        discount: {
            type: Number,
            required: true,
            min: 0,
            max: 100
        },
        startDate: {

            type: Date,
            required: true,

        },
        endDate: {              //schema validation for date

            type: Date,
            required: true,
            validate:{
                validator: function (value){
                    return value > this.startDate;
                },
                message:"End date must be start date",
            },

        },

        active: {
            type: Boolean,
            default: true,


        },

    },
    { timestamps: true, }

);



const Promotion = mongoose.model('promotion', promotionSchema);
export default Promotion;








