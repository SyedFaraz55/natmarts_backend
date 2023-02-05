const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  arabic: { type: String, required: true },
  telugu: { type: String, required: true },
  image: [{ type: String }],
  basePrice: { type: String, required: true },
  description: { type: String, required: true },
  benefits: String,
  benefitsar:String,
  benefitstr:String,
  variants: [],
  price: { type: Number, required: true },
  discountedPrice: { type: String, required: true },
  reviews: [],
  category: { type: String, required: true },
  stock:{type:String},
  aed:String
  
});

ProductSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, config.get("jwtPrivateKey"));
  return token;
};

// const validateUser = (user) => {
//   const schema = Joi.object({
//     username: Joi.string().min(5).max(50).required(),
//     email: Joi.string().min(5).max(255).required().email(),
//     password: Joi.string().min(5).max(255).required(),
//     mobile:Joi.number().required()
//   });

//   return schema.validate(user);
// };

const Product = mongoose.model("product", ProductSchema);
exports.Product = Product;
// exports.validate = validateUser;
