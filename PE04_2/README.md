# Input
The user is able to make several inputs to the To Do List application. First, they are able to type text in the Input component. If they hit "Submit", the Input component text is used to create a new Todo item and added to the list. Each To Do item has a "Done" and a "Delete" button that allows them to be removed or marked as complete. The tasks can be filtered by completion status by selecting an option from the Tab Bar at the bottom of the screen.

# Process
Tasks are modified based on the provided buttons. The primary processes are creating new tasks, and filtering the tasks based on completion status. Each task is made of a number, a description, and a completion status. When the state's type is changed using the Tab Bar, a copy of the original to do list is made and filtered to only match tasks with the appropriate completion status.

# Output
The primary output for this application is the Task List. Different tasks are visible based on the chosen parameters. However, stylistic elements will also change depending on the user's inputs, such as a completed tasks's "Done" button text turning green and bold.