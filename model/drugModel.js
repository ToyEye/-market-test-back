import { model, Schema } from "mongoose";

const drugSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "https://placehold.co/600x400",
  },
  shopId: {
    type: String,
    required: true,
  },
});

export const Drug = model("drug", drugSchema);
