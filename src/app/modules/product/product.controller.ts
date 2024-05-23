import { Request, Response } from 'express';
import { ProductServices } from './product.service';
import productValidationSchema from './product.validation';
import { errorHandler } from '../order/order.controller';

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;

    // creating a schema validation using zod
    const zodParseData = productValidationSchema.parse(productData);

    const result = await ProductServices.createProductIntoDB(zodParseData);

    res.status(200).json({
      success: true,
      message: 'Product is created successfully',
      data: result,
    });
  } catch (err: unknown) {
    errorHandler(err as Error, req, res);
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsFromDB();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (err: unknown) {
    errorHandler(err as Error, req, res);
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getSingleProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    });
  } catch (err: unknown) {
    errorHandler(err as Error, req, res);
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.deleteProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: result,
    });
  } catch (err: unknown) {
    errorHandler(err as Error, req, res);
  }
};

const updateProductController = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;
    const { productId } = req.params;
    const updatedProduct = await ProductServices.updateProductInDB(
      productId,
      productData,
    );
    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }
    res.json({
      success: true,
      message: 'Product updated successfully!',
      data: updatedProduct,
    });
  } catch (err: unknown) {
    errorHandler(err as Error, req, res);
  }
};

// testing
const searchProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;

    if (typeof searchTerm !== 'string' && typeof searchTerm !== 'undefined') {
      return res.status(400).json({
        success: false,
        message: 'Invalid search term',
      });
    }

    const result = await ProductServices.searchProductsInDB(searchTerm);
    res.status(200).json({
      success: true,
      message: searchTerm
        ? `Products matching search term '${searchTerm}' fetched successfully!`
        : 'All products fetched successfully!',
      data: result,
    });
  } catch (err: unknown) {
    errorHandler(err as Error, req, res);
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  deleteProduct,
  updateProductController,
  searchProducts,
};
