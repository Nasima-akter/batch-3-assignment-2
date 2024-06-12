import { Schema, model } from 'mongoose';
import {
  TInventory,
  TProduct,
  TVariant,
} from './product/product.interface';

const variantSchema = new Schema<TVariant>({
  type: String,
  value: String,
});
const inventorySchema = new Schema<TInventory>({
  quantity: { type: Number, default: 0 },
  inStock: { type: Boolean, default: false },
});

// main schema
const productSchema = new Schema<TProduct>({
  name: { type: String, trim: true },
  description: { type: String },
  price: { type: Number },
  category: { type: String },
  tags: ['smartphone', 'Apple', 'iOS'],
  variants: [variantSchema],
  inventory: inventorySchema,

  isDeleted: {
    type: Boolean,
    default: false,
  },
});

// Query middleware
productSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
productSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
productSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});
productSchema.statics.isUserExists = async function (name: string) {
  const existingUser = await Product.findOne({ name });
  return existingUser;
};

export const Product = model<TProduct>('Product', productSchema);