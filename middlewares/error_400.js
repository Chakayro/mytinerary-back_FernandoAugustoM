const error_400 = (error, req, res, next) => {
    console.log(error);
    if (error.status === 400 || error.statusCode === 400 || error.name === 'ValidationError' || error.name === 'SyntaxError') {
        return res.status(400).json({
            success: false,
            response: error.message || error,
            message: "Error on the city server,this is a Bad Request 400 error"
        });
    }
    next();
}
export default error_400;
    