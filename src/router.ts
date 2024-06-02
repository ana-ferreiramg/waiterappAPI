import path from 'node:path';

import { Router } from 'express';
import multer from 'multer';

import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategory';
import { deleteCategory } from './app/useCases/categories/deleteCategory';
import { listProducts } from './app/useCases/products/listProducts';
import { createProduct } from './app/useCases/products/createProduct';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';
import { deleteProduct } from './app/useCases/products/deleteProduct';
import { listOrders } from './app/useCases/orders/listOrders';
import { createOrder } from './app/useCases/orders/createOrder';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

// GET CATEGORY
router.get('/categories', listCategories);

// CREATE CATEGORY
router.post('/categories', createCategory);

// DELETE CATEGORY
router.delete('/categories/:categoryId', deleteCategory);

// GET PRODUCTS
router.get('/products', listProducts);

// CREATE PRODUCTS
router.post('/products', upload.single('image'), createProduct);

// GET PRODUCTS BY CATEGORY
router.get('/categories/:categoryId/products', listProductsByCategory);

// DELETE PRODUCT
router.delete('/products/:productId', deleteProduct);

// LIST ORDERS
router.get('/orders', listOrders);

// CREATE ORDER
router.post('/orders', createOrder);

// CHANGE ORDER STATUS
router.patch('/orders/:orderId', (req, res) => {
  res.send('OK');
});

// DELETE/CANCEL ORDER
router.delete('/orders/:orderId', (req, res) => {
  res.send('OK');
});
