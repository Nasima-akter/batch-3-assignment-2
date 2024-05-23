export type TInventoryOrder = {
  quantity: number;
  inStock: boolean;
};

export type TOrder = {
  email: string;
  productId: string;
  price: number;
  quantity: number;
  inventory: TInventoryOrder;
};
