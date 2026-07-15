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