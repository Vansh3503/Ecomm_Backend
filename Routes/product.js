import express from 'express';
import { 
  addProduct, 
  deleteProductById, 
  getProductById, 
  getProducts, 
  updateProductById 
} from '../Controllers/product.js';
import { 
  addToWishlist, 
  getUserWishlist, 
  removeFromWishlist 
} from '../Controllers/Wishlist.js';

const router = express.Router();

// Product Routes
router.post('/add', addProduct);
router.get('/all', getProducts);
router.get('/:id', getProductById);
router.put('/:id', updateProductById);
router.delete('/:id', deleteProductById);

// Wishlist Routes
router.post('/wishlist/add', addToWishlist);
router.get('/wishlist/user', getUserWishlist);
router.delete('/wishlist/remove/:productId', removeFromWishlist);

export default router;
