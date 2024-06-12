import { Product } from '../product.model';
import { TProduct } from './product.interface';

// create product
const createProductIntoDB = async (productData: TProduct) => {

    const result = await Product.create(productData);
    return result;
};

// all product
const getAllProductsFromDB = async () => {
    const result = await Product.find();
    return result;
};

const getSingleProductFromDB = async (id: string) => {
    const result = await Product.findById(id);
    return result;
};

// delete product
const deleteProductFromDB = async (id: string) => {
    const result = await Product.findByIdAndUpdate(
        id,
        { isDelete: true },
        {
            new: true,
        },
    );
    return result;
};

const updateProductInDB = async (_id: string, updatedProduct: Partial<TProduct>
): Promise<TProduct | null> => {
    try {
        const result = await Product.findByIdAndUpdate(_id, updatedProduct,
            { new: true },
        );
        return result;
    } catch (error) {
        throw new Error("Error updating product");
    }
};

// const updateProductInDB = async (
//     id: string,
//     updatedProduct: Partial<TProduct>
// ): Promise<TProduct | null> => {
//     try {
//         const result = await Product.findByIdAndUpdate(
//             id,
//             { $set: updatedProduct },
//             { new: true }
//         );
//         return result;
//     } catch (error) {
//         console.error(`Error updating product with ID ${id}:`, error);
//         throw new Error("Error updating product");
//     }
// };

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