import { Request, Response } from 'express';
import { OrderServices } from './order.service';

// error handler
export const errorHandler = (err: Error, req: Request, res: Response) => {
  res.status(500).json({
    success: false,
    message: err.message || 'something went wrong',
    error: err,
  });
};

// create post Order
const createPostOrder = async (req: Request, res: Response) => {
  try {
    const { order: orderData } = req.body;

    const result = await OrderServices.createNewOrderIntoDB(orderData);

    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
    return result;
  } catch (err: unknown) {
    // catch (err: any) {
    //     res.status(500).json({
    //         success: false,
    //         message: err.message || 'something went wrong',
    //         error: err,
    //     });
    // }
    errorHandler(err as Error, req, res);
  }
};

// get all order
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getAllOrderFromDB();
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: result,
    });
  } catch (err: unknown) {
    errorHandler(err as Error, req, res);
  }
};

// get by email
const getOrderByEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    if (typeof email !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'Invalid email',
      });
    }
    const result = await OrderServices.getOrderByEmailFromDB(email);
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully for user email!',
      data: result,
    });
  } catch (err: unknown) {
    errorHandler(err as Error, req, res);
  }
};

export const OrderControllers = {
  createPostOrder,
  getAllOrders,
  getOrderByEmail,
};
