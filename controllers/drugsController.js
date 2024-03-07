import { HttpErrors } from "../helpers/HttpErrors.js";
import { ctrlWrapper } from "../decorators/ctrlWrapper.js";
import { Drug } from "../model/drugModel.js";

const getShopDrugs = async (req, res, next) => {
  const { id } = req.params;

  const drugsList = await Drug.find({ shopId: id });
  if (!drugsList) {
    throw HttpErrors(404);
  }

  res.status(200).json(drugsList);
};

export default {
  getShopDrugs: ctrlWrapper(getShopDrugs),
};
