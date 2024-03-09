import { model, Schema } from "mongoose";
import Joi from "joi";
import { handleSaveError } from "../helpers/mongooseError.js";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: { type: String, require: true, minLength: 6 },
    token: { type: String, default: null },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleSaveError);

export const signupSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

export const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),
});

export const User = model("user", userSchema);
