const express = require('express');
const app = express();
const cors = require('cors');
const ApplicationRouter = require('./routes/Application');
const AppError = require('./utils/Error');

//Using middlewares
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use('/api/v1/application',ApplicationRouter);

const handleError = (error) => {
    let errObj = {};
    Object.values(error.errors).forEach((error => errObj[error.path] = error.message.substring(error.message.indexOf('.')+1)));
    return new AppError(errObj,400);
}

//Global error middleware
app.use((error,req,res,next)=>{
    console.log("Error in Global Middleware : ",error);

    let err = {}
    if(error.isOperational){
         err = {...error};
    }
    else if(error.code === 'LIMIT_FILE_SIZE'){
        err = new AppError({file: "File too large"},400);
    }
    else if(!error.isOperational && error.errors){
        err = handleError({...error});
    }

    //for rest of the cases
    err.statusCode = err.statusCode || 500;
    err.errors = err.errors || {system: 'Sorry, something went wrong!'};

    res.status(err.statusCode).json({
        success: false,
        message: err.message,
        errors: err.errors
    });
})

module.exports = app;