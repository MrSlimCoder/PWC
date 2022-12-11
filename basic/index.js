const express = require('express');
const app = express();

app.get("/",(req,res) => {
    res.send('Hello World');
})

app.listen(3000,(err) => {
    if(err) console.log(err);
    else console.log('Server is running on port 3000');
})


// GET - Backend sends response to frontend
// POST - Frontend send data to backend 
// PUT - Backend update whole data in the database
// PATCH - Backend update few fields of the data in the database 
// DELETE - Backend delete data in the database