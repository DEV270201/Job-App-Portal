//joi validation
const joi = require('joi');
const AppError = require("./Error");

//using joi for validating the user entered fields
exports.SubmitApplicationJoi = async (body) => {
  const schema = joi.object({
    name: joi.string().required(),
    // password: joi.string().min(8).max(15).regex(/^[a-zA-Z]+[a-zA-Z\d]*[@$#]+[a-zA-Z@$#\d]*\d+$/).required(),
    gender: joi.string().required(),
    bio: joi.string().length(300).required(),
    majors: joi.string().required(),
    city: joi.string().required(),
  });

  try {
    return await schema.validateAsync(body);
  } catch (err) {
    console.log("Joi : ", err);
    throw new AppError('Invalid information',400);
  }
}