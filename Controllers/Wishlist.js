// src/Controllers/Wishlist.js

import { Wishlist } from "../Models/Wishlist.js"; // Ensure the path is correct

// Function to add an item to the wishlist
export const addToWishlist = async (req, res) => {
    const { productId, title, price, imgSrc } = req.body; // Data from the request body

    try {
        const newItem = {
            productId,
            title,
            price,
            imgSrc,
        };

        let wishlist = await Wishlist.findOne({ userId: "default_user" }); // Static user ID for testing

        if (!wishlist) {
            wishlist = new Wishlist({
                userId: "default_user",
                items: [],
            });
        }

        const itemExists = wishlist.items.some(item => item.productId === productId);
        if (itemExists) {
            return res.status(400).json({ message: "Item already in wishlist" });
        }

        wishlist.items.push(newItem);
        await wishlist.save(); // Save the wishlist with the new item

        res.status(200).json({ message: "Item added to wishlist successfully", wishlist });
    } catch (error) {
        console.error("Error adding to wishlist:", error);
        res.status(500).json({ message: "Error adding item to wishlist", error });
    }
};

// Function to remove an item from the wishlist
export const removeFromWishlist = async (req, res) => {
    const { productId } = req.params; // Product ID from the route parameter

    try {
        const wishlist = await Wishlist.findOne({ userId: "default_user" });

        if (!wishlist) {
            return res.status(404).json({ message: "Wishlist not found" });
        }

        wishlist.items = wishlist.items.filter(item => item.productId !== productId);

        await wishlist.save(); // Save the updated wishlist

        res.status(200).json({ message: "Item removed from wishlist successfully", wishlist });
    } catch (error) {
        console.error("Error removing item from wishlist:", error);
        res.status(500).json({ message: "Error removing item from wishlist", error });
    }
};

// Function to get the wishlist
export const getWishlist = async (req, res) => {
    try {
        const wishlist = await Wishlist.findOne({ userId: "default_user" }); // Static user ID for testing

        if (!wishlist) {
            return res.status(404).json({ message: "Wishlist not found" });
        }

        res.status(200).json(wishlist);
    } catch (error) {
        console.error("Error fetching wishlist:", error);
        res.status(500).json({ message: "Error fetching wishlist", error });
    }
};
