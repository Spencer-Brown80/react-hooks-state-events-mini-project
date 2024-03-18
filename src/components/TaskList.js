import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask, selectedCategory }) {
  // Filter tasks based on the selected category
  const filteredTasks = selectedCategory ? tasks.filter(task => task.category === selectedCategory) : tasks;

  const onDeleteClick = (taskId) => {
    onDeleteTask(taskId); 
    console.log(taskId);// Pass the task ID to the onDeleteTask function
  };

  return (
    <div className="tasks">
      {filteredTasks.map(task => (
        <Task key={task.id} task={task} handleDelete={() => onDeleteClick(task.id)} />
      ))}
    </div>
  );
}

export default TaskList;