import { Router } from 'express';

import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategory';
import { listProducts } from './app/useCases/products/listProducts';
import { createProduct } from './app/useCases/products/createProduct';

export const router = Router();

// GET CATEGORY
router.get('/categories', listCategories);

// CREATE CATEGORY
router.post('/categories', createCategory);

// GET PRODUCTS
router.get('/products', listProducts);

// CREATE PRODUCTS
router.post('/products', createProduct);

// GET PRODUCTS BY CATEGORY
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('OK');
});

// LIST ORDERS
router.get('/orders', (req, res) => {
  res.send('OK');
});

// CREATE ORDER
router.post('/orders', (req, res) => {
  res.send('OK');
});

// CHANGE ORDER STATUS
router.patch('/orders/:orderId', (req, res) => {
  res.send('OK');
});

// DELETE/CANCEL ORDER
router.delete('/orders/:orderId', (req, res) => {
  res.send('OK');
});
