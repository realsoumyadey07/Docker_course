const express = require("express");
const app = express();
const port = 3000;

app.use("/", (req, res)=> {
    res.json({
        "hey": "nodejs"
    });
})

app.listen(port, ()=> {
    console.log(`Server is running on ${port}`);
})