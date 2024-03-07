import { Shop } from "../model/shopModel.js";
import { HttpErrors } from "../helpers/HttpErrors.js";
import { ctrlWrapper } from "../decorators/ctrlWrapper.js";

const getShops = async (req, res, next) => {
  const shopList = await Shop.find();
  if (!shopList) {
    throw HttpErrors(404);
  }

  res.status(200).json(shopList);
};

export default {
  getShops: ctrlWrapper(getShops),
};
