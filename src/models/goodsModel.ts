import { model, Schema, Types } from "mongoose";
import handleMongooseError from "helpers/handleMongooseError";
import Joi from "joi";

interface IGood {
  name: string;
  urlPicture: string;
  price: number;
  shop: Types.ObjectId;
}

const goodsSchema = new Schema<IGood>(
  {
    name: {
      type: String,
      required: [true, "DB: Name is required"],
    },
    urlPicture: {
      type: String,
      required: [true, "DB: Url fro Picture is required"],
    },
    price: {
      type: Number,
      required: [true, "DB: price is required"],
    },
    shop: {
      type: Schema.Types.ObjectId,
      ref: "shops",
      required: [true, "DB: shop is required"],
    },
  },
  { versionKey: false, timestamps: true }
);
goodsSchema.post("save", handleMongooseError);

// * Schema Add new shop Joi validation
const schemaAddGood = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  urlPicture: Joi.string().min(10).max(30).required(),
  price: Joi.number().min(0.01).positive().required(),
  shop: Joi.string().min(3).max(30).required(),
});

export const shemas = {
  schemaAddGood,
};

export const modelGoods = model<IGood>("goods", goodsSchema);
