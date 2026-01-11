const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/pair", (req, res) => {
  const number = req.body.number;

  if (!number) {
    return res.json({ success: false, message: "Number is required" });
  }

  const pairCode = "THANUVA-" + Math.floor(100000 + Math.random() * 900000);

  res.json({
    success: true,
    code: pairCode
  });
});

app.listen(PORT, () => {
  console.log("THANUVA-X-MD PAIR WEB running on port " + PORT);
});
