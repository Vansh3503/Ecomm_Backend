import { Wishlist } from "../Models/Wishlist.js";

// Add to Wishlist
export const addToWishlist = async (req, res) => {
  const { productId, title, price, imgSrc } = req.body;
  const userId = req.user; // Assume req.user is populated with the logged-in user's ID

  let wishlist = await Wishlist.findOne({ userId });

  if (!wishlist) {
    wishlist = new Wishlist({ userId, items: [] });
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
  const userId = req.user;

  let wishlist = await Wishlist.findOne({ userId });
  if (!wishlist) return res.json({ message: "Wishlist not found" });

  res.json({ message: "User wishlist", wishlist });
};

// Remove from Wishlist
export const removeFromWishlist = async (req, res) => {
  const productId = req.params.productId;
  const userId = req.user;

  let wishlist = await Wishlist.findOne({ userId });
  if (!wishlist) return res.json({ message: "Wishlist not found" });

  wishlist.items = wishlist.items.filter(
    (item) => item.productId.toString() !== productId
  );

  await wishlist.save();
  res.json({ message: "Product removed from wishlist" });
};
