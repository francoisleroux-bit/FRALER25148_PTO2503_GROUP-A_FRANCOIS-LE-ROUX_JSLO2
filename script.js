// ============================
// Function to collect one task's data from user input
// Prompts for title, description, and status with validation
// ============================
function getTask(taskNumber) {
  // Ask for task title
  const title = prompt(`Enter task ${taskNumber} title:`);

  // Ask for task description
  const description = prompt(`Enter the Description for Task ${taskNumber}:`);

  // Ask for valid status repeatedly until a correct one is provided
  let status;
  while (true) {
    status = prompt(`Enter the Status for Task ${taskNumber} (todo, doing, done):`).toLowerCase();
    if (["todo", "doing", "done"].includes(status)) break;
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
  }

  // Return task object with the collected data
  return {
    title: title,
    description: description,
    status: status
  };
}

// ============================
// Collect two tasks from the user using getTask()
// ============================
const task1 = getTask(1);
const task2 = getTask(2);

// ============================
// Store the properties of each task in separate variables
// Useful for accessing them individually later
// ============================
const title1 = task1.title;
const desc1 = task1.description;
const status1 = task1.status;
const title2 = task2.title;
const desc2 = task2.description;
const status2 = task2.status;

// ============================
// Store both task objects in a single array
// ============================
const tasks = [task1, task2];

// ============================
// Filter out only tasks that are marked as "done"
// ============================
const completedTasks = tasks.filter(task => task.status === "done");

// ============================
// Log the completed tasks to the console
// If no tasks are completed, encourage the user to keep working
// ============================
if (completedTasks.length > 0) {
  console.log("Completed Tasks:");
  completedTasks.forEach(task => {
    const statusLower = task.status.toLowerCase();
    console.log(`Title: ${task.title}, Status: ${statusLower}`);
  });
} else {
  console.log("No tasks completed, let's get to work!");
}
