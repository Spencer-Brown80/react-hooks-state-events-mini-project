import React from "react";

function Task({ task, handleDelete }) {
 
  const { text, category, id } = task; // Destructure task object

  const onDeleteClick = (e) => {
    e.preventDefault();
    handleDelete(id); // Pass the task object to the handleDelete function
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={onDeleteClick}>X</button>
    </div>
  );
}

export default Task;