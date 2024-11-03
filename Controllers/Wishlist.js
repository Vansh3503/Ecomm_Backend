import express from 'express';
import { Wishlist } from '../models/wishlist.js';

const router = express.Router();

// Mock user ID for testing
const DEFAULT_USER_ID = "default_user"; 

// GET all wishlist items for the default user
router.get('/', async (req, res) => {
    try {
        const wishlist = await Wishlist.findOne({ userId: DEFAULT_USER_ID });
        if (!wishlist) {
            return res.status(404).json({ message: 'Wishlist not found' });
        }
        res.json(wishlist.items);
    } catch (error) {
        console.error('Error fetching wishlist:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// POST to add an item to the wishlist
router.post('/', async (req, res) => {
    const { productId, title, price, imgSrc } = req.body;

    if (!productId || !title || !price || !imgSrc) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Find the wishlist for the default user
        let wishlist = await Wishlist.findOne({ userId: DEFAULT_USER_ID });

        // If the wishlist does not exist, create one
        if (!wishlist) {
            wishlist = new Wishlist({
                userId: DEFAULT_USER_ID,
                items: []
            });
        }

        // Add new item to the wishlist
        wishlist.items.push({ productId, title, price, imgSrc });

        // Save the updated wishlist
        await wishlist.save();
        res.status(201).json(wishlist);
    } catch (error) {
        console.error('Error adding to wishlist:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// DELETE to remove an item from the wishlist
router.delete('/:productId', async (req, res) => {
    const { productId } = req.params;

    try {
        const wishlist = await Wishlist.findOne({ userId: DEFAULT_USER_ID });

        if (!wishlist) {
            return res.status(404).json({ message: 'Wishlist not found' });
        }

        // Filter out the item to be deleted
        wishlist.items = wishlist.items.filter(item => item.productId !== productId);

        // Save the updated wishlist
        await wishlist.save();
        res.status(200).json({ message: 'Item removed from wishlist', items: wishlist.items });
    } catch (error) {
        console.error('Error removing item from wishlist:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;
