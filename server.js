import app from "./app.js";
import mongoose from "mongoose";

const { DATABASE } = process.env;

mongoose
  .connect(DATABASE)
  .then(() => {
    console.log("Mongo on");
    app.listen(3001, () => {
      console.log("server on");
    });
  })
  .catch(() => {
    process.exit(1);
  });
