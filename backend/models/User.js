const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const user = new Schema({
    name: String,
    email: { type: String, unique: true },
    password: { type: String },
    //token: String
});

user.pre("save", function (next) {
    const user = this
  
    if (this.isModified("password") || this.isNew) {
      bcrypt.genSalt(6, function (saltError, salt) {
        if (saltError) {
          return next(saltError)
        } else {
          const hash = bcrypt.hashSync(user.password, salt);
          console.log(hash);
          user.password = hash.toString();
          next()
        }
      })
    } else {
      return next()
    }
  })

module.exports = mongoose.model('User', user);