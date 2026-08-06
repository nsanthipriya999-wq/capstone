
//--------------------Service Schema------------------
import mongoose from 'mongoose';
const serviceSchema = new mongoose.Schema(
  {

    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },
    duration: {

      type: Number,
      min: 1,

    },

    image: {
      type: String,
      default: "",

    },

    active: {
      type: Boolean,
      default: true,


    },

  },
  { timestamps: true, }

);
//---index---------
serviceSchema.index({ active: 1 });

const Service = mongoose.model('service', serviceSchema);
export default Service;








