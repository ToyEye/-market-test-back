import { nanoid } from "nanoid";
import { Order } from "../model/orderModel.js";
import { HttpErrors } from "../helpers/HttpErrors.js";
import { ctrlWrapper } from "../decorators/ctrlWrapper.js";

export const addOrder = async (req, res, next) => {
  if (req.body.cartList.length === 0) {
    next(HttpErrors(400));
  }
  const order = await Order.create({ ...req.body, orderId: nanoid() });

  res.status(201).json(order);
};

export const getOrders = async (req, res, next) => {};

export default {
  addOrder: ctrlWrapper(addOrder),
};
