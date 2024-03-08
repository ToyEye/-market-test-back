import express from "express";

import { validateBody } from "../decorators/validateBody.js";
import * as schemas from "../model/users.js";
import authCtrl from "../controllers/auth.js";
import { isEmptyBody } from "../middlewares/isEmptyBody.js";
import { authenticate } from "../middlewares/authenticate.js";

export const usersRoute = express.Router();

usersRoute.post(
  "/signup",
  isEmptyBody,
  validateBody(schemas.signupSchema),
  authCtrl.signUp
);

usersRoute.post(
  "/login",
  isEmptyBody,
  validateBody(schemas.loginSchema),
  authCtrl.login
);

usersRoute.get("/current", authenticate, authCtrl.getCurrent);

usersRoute.post("/logout", authenticate, authCtrl.logout);
