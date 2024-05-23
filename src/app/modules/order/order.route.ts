import express from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router();

router.post('/', OrderControllers.createPostOrder);

router.get('/', OrderControllers.getAllOrders);

router.get('/', OrderControllers.getOrderByEmail);

export const OrderRoutes = router;
