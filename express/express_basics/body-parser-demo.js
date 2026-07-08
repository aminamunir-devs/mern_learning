const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Register body-parser middleware
app.use(bodyParser.json());

// POST route
app.post("/students", (req, res) => {
    console.log(req.body);

    res.json({
        message: "Student received successfully",
        data: req.body,
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});