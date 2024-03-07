import express from "express";
import { isValidId } from "../middlewares/isValidId.js";
import ctrl from "../controllers/drugsController.js";

export const drugsRouter = express.Router();

drugsRouter.get("/:id", isValidId, ctrl.getShopDrugs);
