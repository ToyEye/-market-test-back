import express from "express";
import morgan from "morgan";
import cors from "cors";
import "dotenv/config";

import { shopRoute } from "./routes/shops.js";
import { drugsRouter } from "./routes/drugs.js";
import { usersRoute } from "./routes/users.js";
import { orderRoute } from "./routes/orders.js";

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api/shops", shopRoute);
app.use("/api/shopdrugs", drugsRouter);
app.use("/api/auth", usersRoute);
app.use("/api/order", orderRoute);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((error, req, res, next) => {
  const { status = 500, message = "Server error" } = error;
  res.status(status).json({ message });
});

export default app;
