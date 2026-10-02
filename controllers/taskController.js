import db from "../models/index.cjs";

const { Task, User } = db;

export async function getTasks(req, res) {
  const tasks = await Task.findAll({
    include: User,
    order: [["id", "ASC"]]
  });

  res.json(tasks);
}

export async function createTask(req, res) {
  const task = await Task.create(req.body);

  res.status(201).json(task);
}

export async function getTaskById(req, res) {
  const task = await Task.findByPk(req.params.id, {
    include: User
  });

  if (!task) {
    return res.status(404).json({
      error: "Task not found"
    });
  }

  res.json(task);
}

export async function updateTask(req, res) {
  const task = await Task.findByPk(req.params.id);

  if (!task) {
    return res.status(404).json({
      error: "Task not found"
    });
  }

  await task.update(req.body);

  res.json(task);
}

export async function deleteTask(req, res) {
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
}

export async function getUsers(req, res) {
  const users = await User.findAll({
    include: Task,
    order: [["id", "ASC"]]
  });

  res.json(users);
}