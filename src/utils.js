// Format a date
export const formatDate = (date) => {
  return `Due: ${date.toLocaleDateString()}`;
};

// Validate a task
export const validateTask = ({ title, dueDate } = {}) => {
  return Boolean(title && dueDate);
};

// Merge task updates
export const mergeTaskUpdate = (original, ...updates) => {
  return Object.assign({}, original, ...updates);
};

export class TaskValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "TaskValidationError";
  }
}
// Create a new task
export function createTask(taskData) {

  if (!validateTask(taskData)) {
    throw new TaskValidationError("Invalid task data");
  }

  return {
    id: Date.now(),
    completed: false,
    ...taskData
  };
}
// Sample tasks
export const tasks = [
  {
    id: 1,
    title: "Assignment 1",
    completed: false
  },
  {
    id: 2,
    title: "Assignment 2",
    completed: true
  }
];