const multer = require('multer');
const path = require("path"); 
const AppError = require('./Error');

var storage = multer.diskStorage({
    destination: function(req,file,call_back){
        call_back(null, `${__dirname}/Documents`);
    },
    filename: function(req,file,call_back){
        console.log("file : ",file);
        req.fileName = Date.now() + path.extname(file.originalname);
        call_back(null, req.fileName );   //setting the new file name stored in the upload file
    }
 });

const file_filter = (req, file, cb)=>{
    let extensions = /pdf|docx/;

    const extname =  extensions.test(path.extname(file.originalname).toLowerCase());
   
    if(extname){
        return cb(null,true);
    } else {
        cb(new AppError(['Please upload pdf/docx only!'],400));
    }
}
 
 var upload = multer({storage : storage,limits : {fileSize : 10000000},fileFilter : file_filter});

 module.exports = upload;