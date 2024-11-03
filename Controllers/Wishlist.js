import { Wishlist } from "../Models/Wishlist.js";

// Add to Wishlist
export const addToWishlist = async (req, res) => {
  const { productId, title, price, imgSrc } = req.body;

  // Here we will simply use a static userId or a given value, as user logic is removed
  const userId = "default_user"; // You can set this to a static value or retrieve dynamically as needed

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

// Get User Wishlist (now retrieves wishlist without needing user context)
export const getUserWishlist = async (req, res) => {
  // Using a default userId, can be adjusted to fetch dynamically if needed
  const userId = "default_user"; // Same as above

  let wishlist = await Wishlist.findOne({ userId });
  if (!wishlist) return res.json({ message: "Wishlist not found" });

  res.json({ message: "User wishlist", wishlist });
};

// Remove from Wishlist
export const removeFromWishlist = async (req, res) => {
  const productId = req.params.productId;

  const userId = "default_user"; // Consistent with above

  let wishlist = await Wishlist.findOne({ userId });
  if (!wishlist) return res.json({ message: "Wishlist not found" });

  wishlist.items = wishlist.items.filter(
    (item) => item.productId.toString() !== productId
  );

  await wishlist.save();
  res.json({ message: "Product removed from wishlist" });
};
