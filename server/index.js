//dependencies
const express = require("express");

const app  = express();
const PORT = 3000;

//middleware
app.use(express.static(__dirname + '/../public'))



app.listen(PORT, () => {
    console.log("Server listening on ", PORT);
});