import express from "express";
import {
  tasks,
  validateTask,
  mergeTaskUpdate
} from "../src/utils.js";

import { fetchSampleUsers } from "../src/api.js";

const router = express.Router();

let users = [];

fetchSampleUsers().then(data => {
  users = data;
});

let nextId = 3;

// GET all tasks
router.get("/tasks", (req, res) => {
  res.json(tasks);
});

// POST task
router.post("/tasks", (req, res) => {

  if (!validateTask(req.body)) {
    return res.status(400).json({
      error: "title and dueDate required"
    });
  }

  const task = {
    id: nextId++,
    completed: false,
    ...req.body
  };

  tasks.push(task);

  res.status(201).json(task);

});

// GET one task
router.get("/tasks/:id", (req, res) => {

  const task = tasks.find(
    task => task.id === Number(req.params.id)
  );

  if (!task) {
    return res.status(404).json({
      error: "Task not found"
    });
  }

  res.json(task);

});

// STEP 6 - PUT task
router.put("/tasks/:id", (req, res) => {

  const id = Number(req.params.id);

  const index = tasks.findIndex(
    task => task.id === id
  );

  if (index === -1) {
    return res.status(404).json({
      error: "Task not found"
    });
  }

  tasks[index] = mergeTaskUpdate(
    tasks[index],
    req.body
  );

  res.status(200).json(tasks[index]);

});

// STEP 7 - DELETE task
router.delete("/tasks/:id", (req, res) => {

  const id = Number(req.params.id);

  const index = tasks.findIndex(
    task => task.id === id
  );

  if (index === -1) {
    return res.status(404).json({
      error: "Task not found"
    });
  }

  const removed = tasks.splice(index, 1);

  res.status(200).json({
    message: "Task deleted",
    task: removed[0]
  });

});

// GET users
router.get("/users", (req, res) => {
  res.json(users);
});

export default router;