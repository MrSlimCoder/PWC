const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require('../models/User');
exports.login = function (req, res) {
    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Error occured while fetching user"
            })
        }
        else if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }
        const data = bcrypt.compareSync(req.body.password, user._doc.password.toString());
        console.log(data);
        // console.log(error);
        // console.log(isMatch);
        // if (error) {
        //     throw error
        // } else if (!isMatch) {
        //     return res.status(404).json({
        //         success: false,
        //         message: "Password is incorrect"
        //     })
        // } else {
        //     console.log("Password matches!")
        //     jwt.sign({
        //         exp: Math.floor(Date.now() / 1000) + (60 * 60),
        //         data: user
        //     }, 'secret', (err, token) => {
        //         if (err) { }
        //         else {
        //             //User.findByIdAndUpdate(user._id, { token: token }, { new: true }, (err, user) => {});
        //             return res.status(200).json({
        //                 success: true,
        //                 data: [{ user: user }, { token: `Bearer ${token}` }],
        //                 message: "User logged in successfully"
        //             })
        //         }
        //     });
        // }
    });
}

exports.signup = function (req, res) {
    const body = req.body;
    const user = new User(body);
    user.save();
    user.password = "";
    res.status(200).json({
        success: true,
        data: user,
        message: "User created successfully"
    })
}