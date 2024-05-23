import { z } from 'zod';

const variantValidationSchema = z.object({
  type: z.string(),
  value: z.string(),
});

const inventoryValidationSchema = z.object({
  quantity: z.number(),
  inStock: z.boolean(),
});

const productValidationSchema = z.object({
  name: z.string().trim(),
  description: z.string().optional(),
  price: z.number(),
  category: z.string(),
  tags: z.array(z.enum(['smartphone', 'Apple', 'iOS'])),
  variants: z.array(variantValidationSchema),
  inventory: inventoryValidationSchema,
  isDeleted: z.boolean().default(false),
});

export default productValidationSchema;
