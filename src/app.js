import {
  formatDate,
  validateTask,
  mergeTaskUpdate,
  createTask
} from "./utils.js";

// It fetches sample users from the API and logs them to the console.
import {
  fetchSampleUsers
} from "./api.js";

console.log(formatDate(new Date("2026-07-22")));
// It validates a task and logs the result to the console.
console.log(
  validateTask({
    title: "Assignment",
    dueDate: "2026-07-22"
  })
);

console.log(validateTask());
// It merges two task objects and logs the result to the console.
console.log(
  mergeTaskUpdate(
    { title: "Old" },
    { title: "New" }
  )
);
// It creates a new task and logs it to the console.
try {
  const task = createTask({
    title: "Assignment",
    dueDate: "2026-07-22"
  });

  console.log(task);

} catch (error) {
  console.error(error.message);
}

try {
  const users = await fetchSampleUsers();

  console.log(users);

} catch (error) {
  console.error(error);
}