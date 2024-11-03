// Wishlist.js (Controller)
import Wishlist from '../Models/Wishlist.js';
import mongoose from 'mongoose';

export const addToWishlist = async (req, res) => {
    const { userId, productId, title, price, imgSrc } = req.body;

    try {
        const wishlist = await Wishlist.findOne({ userId });

        if (!wishlist) {
            const newWishlist = new Wishlist({
                userId,
                items: [{ productId, title, price, imgSrc }],
            });
            await newWishlist.save();
            return res.status(201).json(newWishlist);
        } else {
            // Check if the product is already in the wishlist
            const itemExists = wishlist.items.some(item => item.productId.toString() === productId);
            if (itemExists) {
                return res.status(400).json({ message: 'Product already in wishlist' });
            }
            wishlist.items.push({ productId, title, price, imgSrc });
            await wishlist.save();
            return res.status(200).json(wishlist);
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
};

export const getUserWishlist = async (req, res) => {
    const { userId } = req.query; // Assuming you pass userId as a query parameter

    try {
        const wishlist = await Wishlist.findOne({ userId });
        if (!wishlist) {
            return res.status(404).json({ message: 'Wishlist not found' });
        }
        res.status(200).json(wishlist);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const removeFromWishlist = async (req, res) => {
    const { productId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
        return res.status(400).json({ message: 'Invalid product ID' });
    }

    try {
        const wishlist = await Wishlist.findOneAndUpdate(
            { userId: "default_user" }, // Replace with actual user ID logic
            { $pull: { items: { productId } } },
            { new: true }
        );

        if (!wishlist) {
            return res.status(404).json({ message: 'Wishlist not found' });
        }

        res.status(200).json(wishlist);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
