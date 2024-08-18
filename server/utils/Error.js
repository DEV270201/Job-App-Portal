class AppError extends Error{
    constructor(errors,statusCode){
        super('App Error');
        this.statusCode = statusCode;
        this.success = false;
        this.errors = errors;
        this.isOperational = true; //it is an operational error like errors generated due to wrong input by client etc

        Error.captureStackTrace(this,this.constructor);
    }
}

module.exports = AppError;