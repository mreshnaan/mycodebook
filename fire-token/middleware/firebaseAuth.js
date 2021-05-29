const express = require('express')
const admin = require("../firebaseServices");
const { responseHandler } = require('../helper/customHandler');
const ResponseHandler = require("../helper/customHandler")



module.exports = {

    checkIfAuthenticated: async (req, res, next) => {
        try {
            if (req.headers.authorization && req.headers.headers.split(" ")[0] == "Bearer") {
                const token = req.headers.authorization.split('Bearer')[1].trim();
                const userInfo = await admin.auth().verifyIdToken(token)

                if (userInfo == null) {
                    return ResponseHandler.responseErrorHandler(res, 401, "Token Missing...", "Failed")
                }
                req.authToken = userInfo;
                return next();


            } else {
                return ResponseHandler.responseErrorHandler(res, 401, "Your Not Authorized...", "Failed")

            }



        } catch (error) {
            return ResponseHandler.responseErrorHandler(res, 401, error, "Invalid Token...", "Failed")

        }

    }




}