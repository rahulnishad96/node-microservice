const express = require("express");

const app = express();


app.use('/hello', (req, res) => {
    res.send("Responce to from /hello");
});

app.use('/test', (req, res) => {
    res.send("Responce to from /test");
});


app.listen(3000, () => {
    console.log("Server is listening on port 3000...")
})