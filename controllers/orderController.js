import { nanoid } from "nanoid";
import { Order } from "../model/orderModel.js";
import { HttpErrors } from "../helpers/HttpErrors.js";
import { ctrlWrapper } from "../decorators/ctrlWrapper.js";

const addOrder = async (req, res, next) => {
  if (req.body.cartList.length === 0) {
    next(HttpErrors(400));
  }
  const order = await Order.create({ ...req.body, orderId: nanoid() });

  res.status(201).json(order);
};

const getOrders = async (req, res, next) => {
  const { email } = req.body;

  const orders = await Order.aggregate([
    { $match: { email } },
    { $unwind: "$cartList" },
    { $project: { _id: 0, cartList: 1 } },
  ]);

  if (!orders || orders.length === 0) {
    return next(HttpErrors(400, "Orders with this email not found"));
  }
  const cartList = orders.map((order) => order.cartList);

  res.status(200).json(cartList);
};

const getOrder = async (req, res, next) => {
  const { orderId } = req.params;

  const order = await Order.aggregate([
    { $match: { orderId } },
    { $unwind: "$cartList" },
    { $project: { _id: 0, cartList: 1 } },
  ]);

  if (!order) {
    next(HttpErrors(400, "Order not found"));
  }

  const cartList = order.map((order) => order.cartList);
  res.status(200).json(cartList);
};

export default {
  addOrder: ctrlWrapper(addOrder),
  getOrders: ctrlWrapper(getOrders),
  getOrder: ctrlWrapper(getOrder),
};
