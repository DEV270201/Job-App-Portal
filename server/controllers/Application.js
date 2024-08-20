const Applicant = require("../models/Applicants");
const S3Client = require('../utils/S3Client');
const {PutObjectCommand} = require('@aws-sdk/client-s3');

exports.Submit = async (req, res, next) => {
  try {
    
    let Bucket = process.env.AWS_S3_BUCKET;
    let Region = process.env.AWS_S3_REGION;
    let Key = Date.now() + req.file.originalname;

    console.log("file : ",req.file);

    const data = await S3Client.send(
      new PutObjectCommand({
        Body: req.file.buffer,
        Bucket,
        ContentType: 'application/pdf',
        Key
      })
    );

    console.log("data received from s3 : ",data);
    let link = `https://${Bucket}.s3.${Region}.amazonaws.com/${Key}`

    const applicant = await Applicant.create({
        name: req.body.name,
        city: req.body.city,
        majors: req.body.majors,
        resume: link,
        bio: req.body.bio,
        gender: req.body.gender
    });

    console.log(applicant.toJSON());

    return res.status(201).json({
      data: {
        success: true,
        message: "Your application was successfull!",
      }
    });

  } catch (err) {
    console.log("Error @ Submit Application : ", err);
    return next(err);
  }
};

exports.getApplicants = async (req, res, next) => {
  try {

    const applicants = await Applicant.findAll();

    return res.status(200).json({
      success: true,
      data: applicants
    });

  } catch (err) {
    console.log("Error @ Get Applicants : ", err);
    return next(err);
  }

};