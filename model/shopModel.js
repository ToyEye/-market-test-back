import { model, Schema } from "mongoose";

const shopSchema = new Schema(
  {
    name: { type: String, required: true },
  },
  { versionKey: false }
);

export const Shop = model("shop", shopSchema);
