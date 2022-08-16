let todos = [];
//const { v4: uuidv4 } = require('uuid');

// const createTask = (req, res) => {
//   try {
//     const taskId = uuidv4();
//     const taskObj = {
//       id: 0,
//       name: req.body.name,
//       description: req.body.description,
//       done: req.body.done
//     }
//   } catch (err) {
//     req.error('Error createing');
//     throw err;
//   }
// }

export const getTaskList = (httpRequest, httpResponse) => {
  return httpResponse.status(201).send(todos);
};

export const getTaskById = (httpRequest, httpResponse) => {
  const taskId = httpRequest.params.id;
  if (!taskId) {
    return httpResponse.status(400).send({
      message: 'Please use a valid id',
    });
  }

  const found = todos.find(t => t.id === taskId);
  if (!found) {
    return httpResponse.status(404).send({
      message: `No task found matching the id: ${taskId}`,
    });
  }

  return httpResponse.status(201).send(found);
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
  return httpResponse.status(201).send(todos);
}

export const updateTask = (req, response) => {
  const taskId = req.params.id;
  if (!req.body.task) {
    return response.status(400).send({
      message: 'Invalid data, you need to provide a task',
    });
  }

  const found = todos.find(q => q.id === taskId);
  if (!found) {
    return response.status(404).send({
      message: `No task found matching the id: ${taskId}`,
    });
  }

  found.task = req.body.task,
  found.description = req.body.description,
  found.done = req.body.done

  return response.status(201).send(todos);
}

export const removeTaskById = (httpRequest, httpResponse) => {
  const taskId = httpRequest.params.id;
  if (!taskId) {
    return httpResponse.status(400).send({
      message: 'Please use a valid id',
    });
  }

  const found = todos.find(q => q.id === taskId);
  if (!found) {
    return httpResponse.status(404).send({
      message: `No task found matching the id: ${taskId}`,
    });
  }

  todos = todos.filter(t => t.id !== taskId);

  return httpResponse.status(201).send(todos);
};
