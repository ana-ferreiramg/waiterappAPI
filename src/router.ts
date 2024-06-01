import { Router } from 'express';

export const router = Router();

// GET CATEGORY
router.get('/categories', (req, res) => {
  res.send('OK');
});

// CREATE CATEGORY
router.post('/categories', (req, res) => {
  res.send('OK');
});

// GET PRODUCTS
router.get('/products', (req, res) => {
  res.send('OK');
});

// CREATE PRODUCTS
router.post('/products', (req, res) => {
  res.send('OK');
});

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
