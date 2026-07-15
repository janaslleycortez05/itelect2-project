import {
  formatDate,
  validateTask,
  mergeTaskUpdate
} from "./utils.js";

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