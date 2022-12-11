require('dotenv').config();
const express = require('express');
const bodyParser = require("./middlewares/bodyParser");
const monitor = require("./middlewares/morgan");
require("./config/mongodb");
const passport = require("passport");
require("./config/passport")(passport);
// const bcrypt = require("./config/bcrypt");
const todo = require("./routes/todo");
const user = require("./routes/user");
const app = express();
const cors = require("cors");

// Middlewares
app.use(cors());
app.use(monitor.morgan);
app.use(bodyParser.parse); // for parsing application/json
app.use("/user", user);
app.use("/todo",todo);


// USELESS APIS
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Success",
        data: {
            name: "John Doe",
        }
    })
});

app.post("/", (req, res) => {
    const body = req.body;

    if (body.name === "vivek") {
        return res.status(200).json({
            message: "Success",
            data: [{
                first_name: "vivek",
                last_name: "anand",
                email: "vivek@theslimcoder.com"
            }]
        })
    }

    else {
        return res.status(400).json({
            message:"User Not Found"
        })
    }
})


app.listen(4000, (err) => {
    if (err) console.log(err);
    else console.log("SERVER IS RUNNING ON PORT 4000");
})
