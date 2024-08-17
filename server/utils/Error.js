class AppError extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode;
        this.success = false;
        this.isOperational = true; //it is an operational error like errors generated due to wrong input by client etc

        Error.captureStackTrace(this,this.constructor);
    }
}

module.exports = AppError;