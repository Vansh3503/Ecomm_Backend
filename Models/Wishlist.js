import mongoose from "mongoose";

const wishlistItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    require: true,
  },
  title: { type: String, require: true },
  price: { type: Number, require: true },
  imgSrc: { type: String, require: true },
});

const wishlistSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  items: [wishlistItemSchema],
});

export const Wishlist = mongoose.model("Wishlist", wishlistSchema);
