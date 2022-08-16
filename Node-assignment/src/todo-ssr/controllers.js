const getTasksListHtml = (taskList) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Task List</title>
    </head>
    <body>
      <ul>
        ${todos.map(taskItem => (
          `<li style="padding:8">
  
            <p>Task: ${taskItem.task}</p>
            <p>Description: ${taskItem.description}</p>
            <p>Is it done? ${taskItem.done}</p>

          </li>`
        )).join('')}
      </ul>
    </body>
  </html>`;
};

let todos = [{
  id: 0,
  task: "Finish assignment",
  description: "Implement the code to satisfy all the requirements and test it",
  done: false,
 }];

export const getTaskList = (_httpRequest, httpResponse) => {
  return httpResponse.status(201).send(getTasksListHtml(todos));
};

export const addAnotherTask = (req, httpResponse) => {
  if (!req.body.task) {
    return httpResponse.status(400).send({
      message: 'Invalid data, you need to provide a task',
    });
  }

  const newTodo = {
    id: Math.random().toString(36).slice(2),
    task: req.body.task,
    description: req.body.description,
    done: false
  }

  todos.push(newTodo);
  return httpResponse.status(301).redirect('/');
}

