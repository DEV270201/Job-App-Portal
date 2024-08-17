const express = require('express');
const upload = require('../utils/FileUpload');
const router = express.Router();
const {Submit} = require('../controllers/Application');


// route to submit the application
router.post('/',upload.single('file'),Submit);

module.exports = router;