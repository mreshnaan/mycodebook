require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const helper = require("./helper/customHandler")


app.use(cors());

const port = process.env.PORT || 3000;




app.get("/", (req, res, next) => {

    return helper.responseHandler(res, 201, "Data Successfuly Retrieve", "Hellow My Code Book")


})

app.listen(port, () => console.log(`Server running on http://localhost:${port}`))
