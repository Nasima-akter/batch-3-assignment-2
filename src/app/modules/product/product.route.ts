import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.post('/create-product', ProductControllers.createProduct);

router.get('/', ProductControllers.getAllProducts);

router.get('/:productId', ProductControllers.getSingleProduct);

router.delete('/:productId', ProductControllers.deleteProduct);

router.patch('/:productId', ProductControllers.updateProductController);

router.get('/', ProductControllers.searchProducts);

export const ProductRoutes = router;