# Assignment 2

## Welcome to Assignment 2 of typeScript!

This project is a simple Node.js application built with Express and TypeScript, and it connects to a MongoDB database using Mongoose. The project is configured to use ESLint and Prettier for code linting and formatting.

## Technology You Can Use
1. Node.js
2. Express.js
3. TypeScript

## Pre Requisites 
- [Node.js] (https://nodejs.org/)
- [npm] (https://www.npmjs.com/)
- [mongoDB] (https://www.mongodb.com/)


  ## Installation
  1. Clone the repository
```bash
  git clone https://github.com/Nasima-akter/batch-3-assignment-2.git
```

2. Install Dependencies:

```bash
  npm install
```

 or if you're using yarn:
 ```bash
  yarn install
```

3. Create a `.env` file in the root directory and add your MongoDB URI:
  ```bash
  NODE_ENV=development
   PORT=5000
   DATABASE_URL=mongodb+srv://<UserName>:<Password>@cluster0.kvfjx.mongodb.net/assignment-2?retryWrites=true&w=majority&appName=Cluster0
```

 ## Running the Application

### Development

To run the application in development mode with hot reloading:

 ```bash
  npm run start:dev
```
or if you're using yarn:
 ```bash
  yarn start:dev
```
## Production
To build the application and run it in production mode:
1. Build the application:
 ```bash
  npm run build
```

or if you're using yarn:
 ```bash
  yarn build
```
2. Start the application:
  ```bash
  npm run start:prod
```
or if you're using yarn:
```bash
  yarn start:prod
```

## Linting and Formatting
To run ESLint:
```bash
  npm run lint
```
or if you're using yarn:
```bash
  yarn lint
```
To automatically fix linting issues:
```bash
  npm run lint:fix
```
or if you're using yarn:
```bash
  yarn lint:fix
```
To run Prettier:
```bash
  npm run prettier
```
or if you're using yarn:
```bash
  yarn prettier
```
To automatically fix formatting issues with Prettier:
```bash
  npm run prettier:fix
```
## API Endpoints
### 1. Create a New Product
- Endpoint: '/api/orders'
- Method: POST
- Sample Request Body:
```bash
  {
    "name": "iPhone 13",
    "description": "A sleek and powerful smartphone with cutting-edge features.",
    "price": 999,
    "category": "Electronics",
    "tags": ["smartphone", "Apple", "iOS"],
    "variants": [
        {
            "type": "Color",
            "value": "Midnight Blue"
        },
        {
            "type": "Storage Capacity",
            "value": "256GB"
        }
    ],
    "inventory": {
        "quantity": 50,
        "inStock": true
    }
}
```
- Sample Response:
```bash
  {
    "success": true,
    "message": "Product created successfully!",
    "data": {
        "name": "iPhone 13",
        "description": "A sleek and powerful smartphone with cutting-edge features.",
        "price": 999,
        "category": "Electronics",
        "tags": ["smartphone", "Apple", "iOS"],
        "variants": [
            {
                "type": "Color",
                "value": "Midnight Blue"
            },
            {
                "type": "Storage Capacity",
                "value": "256GB"
            }
        ],
        "inventory": {
            "quantity": 50,
            "inStock": true
        }
    }
}
```
### 2. Retrieve a List of All Products
- Endpoint: /api/products
- Method: GET
- Sample Response:
```bash
 {
    "success": true,
    "message": "Products fetched successfully!",
    "data": [
        {
            "name": "iPhone 13",
            "description": "A sleek and powerful smartphone with cutting-edge features.",
            "price": 999,
            "category": "Electronics",
            "tags": ["smartphone", "Apple", "iOS"],
            "variants": [
                {
                    "type": "Color",
                    "value": "Midnight Blue"
                },
                {
                    "type": "Storage Capacity",
                    "value": "256GB"
                }
            ],
            "inventory": {
                "quantity": 50,
                "inStock": true
            }
        },
        {
            "name": "Samsung Galaxy S21",
            "description": "High-performance Android smartphone with advanced camera capabilities.",
            "price": 799,
            "category": "Electronics",
            "tags": ["smartphone", "Samsung", "Android"],
            "variants": [
                {
                    "type": "Color",
                    "value": "Phantom Black"
                },
                {
                    "type": "Storage Capacity",
                    "value": "128GB"
                }
            ],
            "inventory": {
                "quantity": 30,
                "inStock": true
            }
        }
        // Additional products can be added here...
    ]
}
```
### 3. Retrieve a Specific Product by ID
- Endpoint: /api/products/:productId
- Method: GET
- Sample Response:
```bash
 {
    "success": true,
    "message": "Product fetched successfully!",
    "data": {
        "name": "iPhone 13",
        "description": "A sleek and powerful smartphone with cutting-edge features.",
        "price": 999,
        "category": "Electronics",
        "tags": ["smartphone", "Apple", "iOS"],
        "variants": [
            {
                "type": "Color",
                "value": "Midnight Blue"
            },
            {
                "type": "Storage Capacity",
                "value": "256GB"
            }
        ],
        "inventory": {
            "quantity": 50,
            "inStock": true
        }
    }
}
```

### 4. Update Product Information
- Endpoint: /api/products/:productId
- Method: PUT

### 5. Delete a Product
- Endpoint: /api/products/:productId
- Method: DELETE

### 6. Search a product
- Endpoint: /api/products?searchTerm=iphone
- Method: GET

## Order Management
### Order Management API Endpoints
### 1. Create a New Order
- Endpoint: /api/orders
- Method: POST
- Sample Request Body:
```bash
  {
    "email": "level2@programming-hero.com",
    "productId": "5fd67e890b60c903cd8544a3",
    "price": 999,
    "quantity": 1
}
```
- Response:
```bash
  {
    "success": true,
    "message": "Order created successfully!",
    "data": {
        "email": "level2@programming-hero.com",
        "productId": "5fd67e890b60c903cd8544a3",
        "price": 999,
        "quantity": 1
    }
}
```

### 2. Retrieve All Orders
- Endpoint: /api/orders
- Method: GET

### 3. Retrieve Orders by User Email
- Endpoint: /api/orders?email=level2@programming-hero.com
- Method: GET

  ### Submission:
  - GitHub Repository URL (Server): https://github.com/Nasima-akter/batch-3-assignment-2
  - Live Server Link: https://assignment-2-umber-sigma.vercel.app/
  - https://assignment-2-umber-sigma.vercel.app/
