# Kanban Board Task Input System

## Overview

Tonight I worked on expanding my Kanban board project by combining JavaScript logic with my existing CSS design. The goal was to build an interactive system where I could input tasks manually and have them behave and look consistent with my UI layout.

## What I Built

### 🧠 Task Prompting with JavaScript
I created a script that prompts the user to enter details for two separate tasks:
- Task title
- Description
- Status (which must be either `todo`, `doing`, or `done`)

To keep things clean and professional, I added validation to the status input — if a user enters something invalid, it will alert them and keep asking until a correct value is provided. All inputs are automatically converted to lowercase to avoid errors.

Once the tasks are collected, they are stored in variables and then pushed into an array. From there, I filter and display the completed tasks (`status: "done"`) in the console. If no tasks are completed, I log a motivational message to keep moving forward.

### 💻 Code Documentation
I went through my entire JavaScript file and added clear green comments explaining each step of the code. I made sure that anyone reading the file would understand the flow — from input collection to task storage and output.

## What I Learned
This session helped me focus on combining:
- JavaScript user input with real UI behavior
- Data validation to avoid messy or broken logic
- Styling consistency between what I see and what I code

It also reminded me how powerful it is to write clean, commented code that I can come back to later and still understand perfectly.

## Next Steps
Eventually I’d like to have these tasks display directly on the board (under TODO, DOING, or DONE), but for now, this was a big step in linking my logic and layout.

