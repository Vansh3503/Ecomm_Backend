// Wishlist.js (Model)
import mongoose from 'mongoose';

const wishlistItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product', // Reference to the Product model
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    imgSrc: {
        type: String,
        required: true,
    },
}, { _id: false });

const wishlistSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    items: [wishlistItemSchema],
}, { timestamps: true });

const Wishlist = mongoose.model('Wishlist', wishlistSchema);
export default Wishlist;
