import { Product } from '../product.model';
import { TProduct } from './product.interface';

// create product
const createProductIntoDB = async (productData: TProduct) => {
    if (await Product.isUserExists(productData.name)) {
        throw new Error('User already exists');
    }
    const result = await Product.create(productData);
    return result;
};

// all product
const getAllProductsFromDB = async () => {
    const result = await Product.find();
    return result;
};

const getSingleProductFromDB = async (_id: string) => {
    // const result = await Product.findOne({ _id });
    const result = await Product.aggregate([{ $match: { _id } }]);
    return result;
};

// delete product
const deleteProductFromDB = async (_id: string) => {
    const result = await Product.deleteOne({ _id }, { isDelete: true });
    return result;
};

const updateProductInDB = async (_id: string, productData: TProduct) => {
    const result = await Product.findByIdAndUpdate({ _id }, productData, {
        new: true,
    });
    return result;
};

// https://www.youtube.com/watch?v=5ckmCW8png0
// testing
const searchProductsInDB = async (searchTerm?: string) => {
    const query: Record<string, unknown> = {};

    if (searchTerm) {
        const regex = new RegExp(searchTerm, 'i');
        query.$or = [
            { name: { $regex: regex } },
            { description: { $regex: regex } },
            { category: { $regex: regex } },
            { tags: { $in: [regex] } },
        ];
    }

    const result = await Product.find(query);
    return result;
};

export const ProductServices = {
    createProductIntoDB,
    getAllProductsFromDB,
    getSingleProductFromDB,
    deleteProductFromDB,
    updateProductInDB,
    searchProductsInDB,
};
