import { model, Schema } from "mongoose";
import Joi from "joi";

const cartItemSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  id: { type: String, required: true },
  price: { type: String, required: true },
  count: { type: Number, required: true },
});

const orderSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    totalCost: {
      type: Number,
      required: true,
    },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    cartList: { type: [cartItemSchema], required: true },
    address: { type: String, required: true },
    orderId: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const AddCartItem = Joi.object({
  name: Joi.string().required(),
  image: Joi.string().required(),
  id: Joi.string().required(),
  price: Joi.string().required(),
  count: Joi.number().required(),
});

export const AddOrder = Joi.object({
  address: Joi.string().required(),
  cartList: Joi.array().items(AddCartItem).required(),
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  phone: Joi.string().required(),
  totalCost: Joi.number().required(),
});

export const getOrders = Joi.object({
  email: Joi.string().required(),
});

export const Order = model("order", orderSchema);
