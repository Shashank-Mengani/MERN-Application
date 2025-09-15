import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }, 
    price:{
        type: String,
        required: true
    },
    image:{
        type:String,
        required: true
    },
    ratings:{
    type:Number,
    default:0,
    min:0,
    max:5,
    required: true
}
},
{
    timestamps: true
});

const Product = mongoose.model('Product', productsSchema);

export default Product;
