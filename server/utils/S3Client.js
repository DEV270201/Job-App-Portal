const AWS = require('@aws-sdk/client-s3');

const S3Client = new AWS.S3Client({
    region: process.env.AWS_REGION_NAME,
    credentials:{
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY
    }
});

module.exports = S3Client;