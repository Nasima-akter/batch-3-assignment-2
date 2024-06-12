

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

