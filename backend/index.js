const express = require("express");
const environment = process.env.NODE_ENV || "development";
const app = express();
const knex = require("knex");
const config = require("./db/knexfile.js")[environment];
const database = knex(config);
app.use(express.json());
app.get("/", (req, res) => {
  const data = database("table_name")
    .select("*")
    .then((users) => res.json(users));
  res.send(data);
});
app.listen(4000, () => console.log("Server running on port 4000"));
