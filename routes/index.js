import express from "express";
import { tasks } from "../src/utils.js";
import { fetchSampleUsers } from "../src/api.js";

const router = express.Router();
let users = [];

fetchSampleUsers().then(data => {
  users = data;
});
router.get("/tasks", (req, res) => {
  res.json(tasks);
});

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

router.get("/users", (req, res) => {
  res.json(users);
});

export default router;