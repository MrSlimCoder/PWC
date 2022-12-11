const mongoose = require("mongoose");

mongoose.connect(process.env.LOCAL_DB_URL,(err) => {
    if(err) {
        console.log("Error connecting to database");
    } else {
        console.log("Connected to database");
    }
}
)