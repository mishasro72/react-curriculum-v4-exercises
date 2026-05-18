export function getVisibleTasks(taskList, filter) {
  if (filter === 'completed') {
    return taskList.filter((task) => task.completed);
  }
  if (filter === 'pending') {
    return taskList.filter((task) => !task.completed);
  }
  return taskList;
}
