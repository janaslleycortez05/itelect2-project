import {
  formatDate,
  validateTask,
  mergeTaskUpdate,
  createTask
} from "./utils.js";

import {
  fetchSampleUsers
} from "./api.js";

console.log(formatDate(new Date("2026-07-22")));

console.log(
  validateTask({
    title: "Assignment",
    dueDate: "2026-07-22"
  })
);

console.log(validateTask());

console.log(
  mergeTaskUpdate(
    { title: "Old" },
    { title: "New" }
  )
);

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