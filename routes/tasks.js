import express from "express";

import {
  getTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
  getUsers
} from "../controllers/taskController.js";

import verifyToken from "../middleware/verifyToken.js";
import requireRole from "../middleware/requireRole.js";

const router = express.Router();

router.get("/tasks", getTasks);

router.post("/tasks", verifyToken, createTask);

router.get("/tasks/:id", getTaskById);

router.put("/tasks/:id", verifyToken, updateTask);

router.delete(
  "/tasks/:id",
  verifyToken,
  requireRole("admin"),
  deleteTask
);

router.get("/users", getUsers);

export default router;