import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    productId: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    imgSrc: { type: String, required: true }
});

const wishlistSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    items: [itemSchema]
});

const Wishlist = mongoose.model('Wishlist', wishlistSchema);
export default Wishlist;
