import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import productRoutes from './src/product/routes/product.routes.js';
import {
  errorHandlerMiddleware,
  handleUncaughtError,
} from './middlewares/errorHandlerMiddleware.js';
import userRoutes from './src/user/routes/user.routes.js';
import cookieParser from 'cookie-parser';
import orderRoutes from './src/order/routes/order.routes.js';

const configPath = path.resolve('./.env');

dotenv.config({ path: configPath });

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// configure routes
app.use('/api/ecommerce/product', productRoutes);
app.use('/api/ecommerce/user', userRoutes);
app.use('/api/ecommerce/order', orderRoutes);

// errorHandlerMiddleware
app.use(errorHandlerMiddleware);

export default app;
