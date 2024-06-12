import { TOrder } from './order.interface';
import { Order } from './order.model';

const createNewOrderIntoDB = async (orderData: TOrder) => {

  const result = await Order.create(orderData);
  return result;
};

const getAllOrderFromDB = async () => {
  const result = await Order.find();
  return result;
};

const getOrderByEmailFromDB = async (email: string) => {
  const result = await Order.findOne({ email });
  return result;
};

export const OrderServices = {
  createNewOrderIntoDB,
  getAllOrderFromDB,
  getOrderByEmailFromDB,
};


