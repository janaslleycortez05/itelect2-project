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