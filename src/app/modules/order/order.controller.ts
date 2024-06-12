import { Request, Response } from 'express';
import { OrderServices } from './order.service';
import OrderValidationSchema from './order.validation';
// import { Order } from './order.model';

// error handler
export const errorHandler = (err: Error, req: Request, res: Response) => {
  res.status(500).json({
    success: false,
    message: err.message || 'something went wrong',
    error: err,
  });
};

// create post Order
const createOrder = async (req: Request, res: Response) => {
  const { order: orderData } = req.body;
  const zodOrderParseData = OrderValidationSchema.parse(orderData)
  const result = await OrderServices.createNewOrderIntoDB(zodOrderParseData);

  res.status(200).json({
    success: true,
    message: 'Order created successfully!',
    data: result,
  });
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
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error,
    });
  }
};

// get by email
const getOrderByEmail = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email  is required'
      })
    }
    const result = await OrderServices.getOrderByEmailFromDB(email);

    // Send response
    res.status(200).json({
      success: true,
      message: `Orders fetched successfully for ${email}`,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error,
    });
  }
};

export const OrderControllers = {
  createOrder,
  getAllOrders,
  getOrderByEmail,
};

