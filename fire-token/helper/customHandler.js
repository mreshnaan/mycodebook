module.exports = {

    responseHandler: (res, statusCode, message, data) => {
        return res.status(201).json({
            status: "Success",
            statusCode: statusCode,
            data: { data },
            message: message
        })

    },

    responseErrorHandler: (res, errorCode, errorMessage, message) => {


        return res.status(201).json({
            status: "Error",
            statusCode: errorCode,
            message: message,
            errorMessage: errorMessage
        })
    }

    


}