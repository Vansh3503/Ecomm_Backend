import mongoose from "mongoose";

const wishlistItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  imgSrc: { type: String, required: true },
});

// Remove userId since there's no user context
const wishlistSchema = new mongoose.Schema({
  items: [wishlistItemSchema],
});

export const Wishlist = mongoose.model("Wishlist", wishlistSchema);
