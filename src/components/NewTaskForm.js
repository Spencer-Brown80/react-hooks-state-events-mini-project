import React, { useState } from "react";

function NewTaskForm({ CATEGORIES, onTaskFormSubmit }) {
  const initialCategory = Array.isArray(CATEGORIES) && CATEGORIES.length > 0 ? CATEGORIES[0] : "";

  const [text, setText] = useState("");
  const [category, setCategory] = useState(initialCategory);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass task details and selected category to the parent component
    onTaskFormSubmit({ text, category });
    // Reset form fields
    setText("");
    setCategory(initialCategory); // Use the initial category again after submission
  };

  // // Render options only if CATEGORIES is defined and an array
  const categoryOptions = Array.isArray(CATEGORIES)
    ? CATEGORIES.map(category => (
        <option key={category} value={category}>
          {category}
        </option>
      ))
    : null;

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={category || ""} onChange={(e) => setCategory(e.target.value)}>
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;