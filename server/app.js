const express = require('express');
const app = express();

//Using middlewares
app.use(express.json());

//Global error middleware
app.use((error,req,res,next)=>{
    let err = {...error};
    console.log("Error in Global Middleware : ",err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Sorry, something went wrong!';

    res.status(err.statusCode).json({
        success: false,
        message: err.message
    });
})

module.exports = app;