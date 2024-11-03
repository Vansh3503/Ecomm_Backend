import Wishlist from '../Models/Wishlist.js';

// Add a product to the user's wishlist
export const addToWishlist = async (req, res) => {
    const userId = req.body.userId || "default_user"; // Use provided userId or default to "default_user"
    const { productId, title, price, imgSrc } = req.body;

    try {
        // Check if the wishlist already exists for the user
        let wishlist = await Wishlist.findOne({ userId: userId });

        if (!wishlist) {
            // If it doesn't exist, create a new wishlist
            wishlist = new Wishlist({
                userId: userId,
                items: []
            });
        }

        // Check if the product is already in the wishlist
        const existingItem = wishlist.items.find(item => item.productId === productId);
        if (existingItem) {
            return res.status(400).json({ message: "Product already in wishlist" });
        }

        // Add the new product to the wishlist
        wishlist.items.push({ productId, title, price, imgSrc });

        // Save the updated wishlist
        await wishlist.save();

        return res.status(201).json(wishlist);
    } catch (error) {
        console.error("Error adding to wishlist:", error);
        return res.status(500).json({ message: "Error adding to wishlist", error: error.message });
    }
};

// Get the user's wishlist
export const getUserWishlist = async (req, res) => {
    const userId = req.query.userId || "default_user"; // Use provided userId from query or default to "default_user"

    try {
        const wishlist = await Wishlist.findOne({ userId: userId });

        if (!wishlist) {
            return res.status(404).json({ message: "Wishlist not found" });
        }

        return res.status(200).json(wishlist);
    } catch (error) {
        console.error("Error retrieving wishlist:", error);
        return res.status(500).json({ message: "Error retrieving wishlist", error: error.message });
    }
};

// Remove a product from the user's wishlist
export const removeFromWishlist = async (req, res) => {
    const userId = req.body.userId || "default_user"; // Use provided userId or default to "default_user"
    const { productId } = req.params;

    try {
        const wishlist = await Wishlist.findOne({ userId: userId });

        if (!wishlist) {
            return res.status(404).json({ message: "Wishlist not found" });
        }

        // Filter out the product to remove
        wishlist.items = wishlist.items.filter(item => item.productId !== productId);

        // Save the updated wishlist
        await wishlist.save();

        return res.status(200).json({ message: "Product removed from wishlist", wishlist });
    } catch (error) {
        console.error("Error removing from wishlist:", error);
        return res.status(500).json({ message: "Error removing from wishlist", error: error.message });
    }
};
