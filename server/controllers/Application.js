const Applicant = require("../models/Applicants");

exports.Submit = async (req, res, next) => {
  try {

    console.log(req.body);

    const applicant = await Applicant.create({
        name: req.body.name,
        city: req.body.city,
        majors: req.body.majors,
        resume: req.fileName,
        bio: req.body.bio,
        gender: req.body.gender
    });

    console.log(applicant.toJSON());

    return res.status(201).json({
      success: true,
      message: "Successfully registered",
    });

  } catch (err) {
    console.log("Error @ Submit Application : ", err);
    return next(err);
  }
};

exports.getApplicants = async (req, res, next) => {
  try {

    const applicants = await Applicant.findAll();

    console.log("applicants : ",applicants);

    return res.status(200).json({
      success: true,
      data: applicants
    });

  } catch (err) {
    console.log("Error @ Get Applicants : ", err);
    return next(err);
  }

};