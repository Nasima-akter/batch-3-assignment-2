import { Schema, model } from 'mongoose';
import { TInventoryOrder, TOrder } from './order.interface';

const inventoryOrderSchema = new Schema<TInventoryOrder>({
  quantity: { type: Number, default: 0 },
  inStock: { type: Boolean, default: false },
});

const orderSchema = new Schema<TOrder>({
  email: { type: String, required: true },
  productId: { type: String },
  price: { type: Number },
  quantity: { type: Number },
  inventory: inventoryOrderSchema,
});

export const Order = model<TOrder>('order', orderSchema);
