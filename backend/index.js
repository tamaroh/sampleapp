const express = require("express");
const environment = process.env.NODE_ENV || "development";
const cors = require("cors");
const app = express();
const knex = require("knex");
const config = require("./db/knexfile.js")[environment];
const db = knex(config);
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/api/tasks", async (req, res) => {
  const tasks = await db("tasks").select();
  res.json(tasks);
});
app.get("/api/tasks/:id", async (req, res) => {
  const task = await db("tasks").where({ id: req.params.id });
  res.json(task);
});
app.post("/api/tasks", async (req, res) => {
  const task = await db("tasks").insert(req.body);
  res.json(task);
});
app.put("/api/tasks/:id", async (req, res) => {
  const task = await db("tasks").where({ id: req.params.id }).update(req.body);
  res.json(task);
});
app.delete("/api/tasks/:id", async (req, res) => {
  const task = await db("tasks").where({ id: req.params.id }).del();
  res.json(task);
});

app.listen(4000, () => console.log("http://localhost:4000"));
