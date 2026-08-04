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
        endDate: {

            type: Date,
            required: true,

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








