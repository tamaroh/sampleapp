const express = require("express");
const environment = process.env.NODE_ENV || "development";
const app = express();
const knex = require("knex");
const config = require("./db/knexfile.js")[environment];
const db = knex(config);
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/api/users", async (req, res) => {
  const users = await db("users").select("*");
  res.json(users);
});
app.get("/api/users/:id", async (req, res) => {
  const user = await db("users").where({ id: req.params.id });
  res.json(user);
});
app.post("/api/users", async (req, res) => {
  const user = await db("users").insert(req.body);
  res.json(user);
});
app.put("/api/users/:id", async (req, res) => {
  const user = await db("users").where({ id: req.params.id }).update(req.body);
  res.json(user);
});
app.delete("/api/users/:id", async (req, res) => {
  const user = await db("users").where({ id: req.params.id }).del();
  res.json(user);
});

app.listen(4000, () => console.log("Server running on port 4000"));
