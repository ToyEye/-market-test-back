import express from "express";
import * as ctrl from "../controllers/orderController.js";
import { isEmptyBody } from "../middlewares/isEmptyBody.js";
import { validateBody } from "../decorators/validateBody.js";
import * as schema from "../model/orderModel.js";

export const orderRoute = express.Router();

orderRoute.post("/", isEmptyBody, validateBody(schema.AddOrder), ctrl.addOrder);

orderRoute.get(
  "/",
  isEmptyBody,
  validateBody(schema.getOrders),
  ctrl.getOrders
);
