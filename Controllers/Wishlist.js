import { Wishlist } from "../Models/Wishlist.js";

// Add to Wishlist
export const addToWishlist = async (req, res) => {
  const { productId, title, price, imgSrc } = req.body;

  // Find the existing wishlist (you might consider a single static wishlist for now)
  let wishlist = await Wishlist.findOne();

  // If no wishlist exists, create a new one
  if (!wishlist) {
    wishlist = new Wishlist({ items: [] });
  }

  const itemIndex = wishlist.items.findIndex(
    (item) => item.productId.toString() === productId
  );

  if (itemIndex === -1) {
    wishlist.items.push({ productId, title, price, imgSrc });
  } else {
    return res.status(400).json({ message: "Item already in wishlist" });
  }

  await wishlist.save();
  res.json({ message: "Item added to wishlist", wishlist });
};

// Get User Wishlist
export const getUserWishlist = async (req, res) => {
  // Retrieve the wishlist
  let wishlist = await Wishlist.findOne();
  if (!wishlist) return res.json({ message: "Wishlist not found" });

  res.json({ message: "User wishlist", wishlist });
};

// Remove from Wishlist
export const removeFromWishlist = async (req, res) => {
  const productId = req.params.productId;

  // Find the existing wishlist
  let wishlist = await Wishlist.findOne();
  if (!wishlist) return res.json({ message: "Wishlist not found" });

  // Filter out the product
  wishlist.items = wishlist.items.filter(
    (item) => item.productId.toString() !== productId
  );

  await wishlist.save();
  res.json({ message: "Product removed from wishlist" });
};
