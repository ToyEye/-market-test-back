import express from "express";
import ctrl from "../controllers/shopController.js";

export const shopRoute = express.Router();

shopRoute.get("/", ctrl.getShops);
