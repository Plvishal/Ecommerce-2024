import express from 'express';
import {
  addNewProduct,
  deleteProduct,
  deleteReview,
  getAllProducts,
  getAllProductByCategory,
  getAllReviewsOfAProduct,
  getProductDetails,
  rateProduct,
  updateProduct,
  getAllProductsForAdmin,
} from '../controllers/product.controller.js';
import { auth, authByUserRole } from '../../../middlewares/auth.js';

const router = express.Router();

// GET Routes
router.route('/products').get(getAllProducts);
router.route('/by-category').get(getAllProductByCategory);
router.route('/details/:id').get(getProductDetails);
router.route('/reviews/:id').get(getAllReviewsOfAProduct);
router.route('/getAllProductForAdmin').get(getAllProductsForAdmin);

// POST Routes
// admin-only
router.route('/add').post(auth, authByUserRole('admin'), addNewProduct);
router.route('/update/:id').put(auth, authByUserRole('admin'), updateProduct);

// DELETE ROUTE
// Admin only
router
  .route('/delete/:id')
  .delete(auth, authByUserRole('admin'), deleteProduct);

// POST Routes User
router.route('/rate/:id').put(auth, rateProduct);

// DELETE Routes User
router.route('/review/delete').delete(auth, deleteReview);

export default router;
