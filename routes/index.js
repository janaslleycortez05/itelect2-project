import express from "express";
import db from "../models/index.cjs";
import verifyToken from "../middleware/verifyToken.js";
import requireRole from "../middleware/requireRole.js";

const { Task, User } = db;

const router = express.Router();

// GET all tasks
router.get("/tasks", async (req, res) => {
  const tasks = await Task.findAll({
    include: User,
    order: [["id", "ASC"]]
  });

  res.json(tasks);
});

// POST task
router.post("/tasks", verifyToken, async (req, res) => {
  const task = await Task.create(req.body);

  res.status(201).json(task);
});

// GET one task
router.get("/tasks/:id", async (req, res) => {
  const task = await Task.findByPk(req.params.id, {
    include: User
  });

  if (!task) {
    return res.status(404).json({
      error: "Task not found"
    });
  }

  res.json(task);
});

// PUT task
router.put("/tasks/:id", verifyToken, async (req, res) => {
  const task = await Task.findByPk(req.params.id);

  if (!task) {
    return res.status(404).json({
      error: "Task not found"
    });
  }

  await task.update(req.body);

  res.json(task);
});

// DELETE task
router.delete(
"/tasks/:id",
  verifyToken,
  requireRole("admin"),
  async (req, res) => {
  const task = await Task.findByPk(req.params.id);

  if (!task) {
    return res.status(404).json({
      error: "Task not found"
    });
  }

  await task.destroy();

  res.json({
    message: "Deleted",
    task
  });
});

// GET users
router.get("/users", async (req, res) => {
  const users = await User.findAll({
    include: Task,
    order: [["id", "ASC"]]
  });

  res.json(users);
});

export default router;