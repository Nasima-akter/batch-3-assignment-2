import { Model } from 'mongoose';

export type TVariant = {
  type: string;
  value: string;
};

export type TInventory = {
  quantity: number;
  inStock: boolean;
};

export type TProduct = {
  name: string;
  description?: string;
  price: number;
  category: string;
  tags: ('smartphone' | 'Apple' | 'iOS')[];
  variants: TVariant[];
  inventory: TInventory;
  isDeleted?: boolean;
};

// for creating static
export interface ProductModel extends Model<TProduct> {
  isUserExists(name: string): Promise<TProduct | null>;
}

// export type ProductMethod = {
//     isUserExists(name: string): Promise<TProduct | null>
// }
// export type ProductModel = Model<TProduct, Record<string, never>, ProductMethod>;
