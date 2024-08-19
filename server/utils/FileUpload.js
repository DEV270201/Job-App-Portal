const multer = require('multer');
const path = require("path"); 
const AppError = require('./Error');

var storage = multer.memoryStorage();

const file_filter = (req, file, cb)=>{
    let extensions = /pdf/;

    const extname =  extensions.test(path.extname(file.originalname).toLowerCase());
   
    if(extname){
        return cb(null,true);
    } else {
        cb(new AppError({file: 'Please upload pdf only!'},400));
    }
}
 
 var upload = multer({storage : storage,limits : {fileSize : 10000000},fileFilter : file_filter});

 module.exports = upload;