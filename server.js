const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", express.static(__dirname + "/build"));

app.listen(4000, () => {
  console.log("listening express server");
});
app.get("/api", (req, res) => {
  res.status(200).send({ server: "works" });
});
