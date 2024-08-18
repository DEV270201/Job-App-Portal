const express = require('express');
const upload = require('../utils/FileUpload');
const router = express.Router();
const {Submit, getApplicants} = require('../controllers/Application');


// route to submit the application
router.post('/',upload.single('file'),Submit);

// route for getting the list of all applicants
router.get('/',getApplicants);

module.exports = router;