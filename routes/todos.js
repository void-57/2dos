const express = require("express");
const router = express.Router();
const to_do = require("../models/todo");
router.get("/", async (req, res) => {
  try {
    const todo = await to_do.find();
    res.json(todo);
  } catch (error) {
    res.send("Error" + error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const todo = await to_do.findById(req.params.id);
    res.json(todo);
  } catch (error) {
    res.send("Error" + error);
  }
});

router.post("/", async (req, res) => {
  const todo = new to_do({
    todo_title: req.body.todo_title,
    is_completed: req.body.is_completed,
  });
  try {
    const todo1 = await todo.save();
    res.json(todo1);
  } catch (error) {
    res.send("Error");
  }
});

router.post("/:id", async (req, res) => {
  const todo = new to_do({
    todo_title: req.body.todo_title,
    is_completed: req.body.is_completed,
  });
  try {
    const todo = await to_do.findById(req.params.id);
    todo.todo_title = req.body.todo_title;
    todo.is_completed = req.body.is_completed;
    const updated = await todo.save();
    res.json(updated);
  } catch (error) {
    res.send("Error" + error);
  }
});

router.delete("/:id", async (req, res) => {
  const todo = new to_do({
    todo_title: req.body.todo_title,
    is_completed: req.body.is_completed,
  });
  try {
    const todo = await to_do.findByIdAndRemove(req.params.id);
  } catch (error) {
    res.send("Error" + error);
  }
});
module.exports = router;
