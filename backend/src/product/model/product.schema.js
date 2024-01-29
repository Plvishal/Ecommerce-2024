import { timeStamp } from 'console';
import mongoose from 'mongoose';

const producSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'product name is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'product description name is required'],
      minLength: [
        10,
        'product description should be atleat 10 characters long',
      ],
    },
    price: {
      type: Number,
      required: [true, 'product price  is required'],
      maxLength: [8, 'price can be of maximum 8 digits'],
    },
    rating: {
      type: Number,
      default: 0,
    },
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    category: {
      type: String,
      required: [true, 'product category is required'],
      enum: [
        'mobile',
        'electronics',
        'clothing',
        'home & garden',
        'automotive',
        'health & beauty',
        'sports & outdoors',
        'toys & games',
        'books & media',
        'jewelry',
        'food & grocery',
        'furniture',
        'shoes',
        'pet supplies',
        'office supplies',
        'baby & kids',
        'art & collectibles',
        'travel & luggage',
        'music instruments',
        'electrical appliances',
        'handmade crafts',
      ],
    },
    stock: {
      type: Number,
      required: [true, 'product stock is mandatory'],
      maxLength: [5, 'stock can be maximum 5 digits'],
      default: 1,
    },
    reviews: [
      {
        user: {
          type: mongoose.Schema.ObjectId,
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        rating: {
          type: Number,
          required: true,
        },
        comment: {
          type: String,
        },
      },
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  timeStamp
);

const ProductModel = mongoose.model('Product', producSchema);
export default ProductModel;
