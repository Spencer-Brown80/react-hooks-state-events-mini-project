import React, { useState } from "react";

function CategoryFilter({ CATEGORIES, onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    if (category === selectedCategory) {
      // If the same category is clicked again, deselect it
      setSelectedCategory(null);
      onCategoryChange(null); // Notify parent component
    } else {
      setSelectedCategory(category);
      onCategoryChange(category); // Notify parent component
    }
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>

      {/* Render "All" button */}
      <button
        key="all"
        onClick={() => handleCategorySelect(null)}
        className={selectedCategory === null ? "selected" : ""}
      >
        All
      </button>

      {/* Render the rest of the categories */}
      {CATEGORIES.map(category => (
        category !== null && (
          <button
            key={category}
            onClick={() => handleCategorySelect(category)}
            className={selectedCategory === category ? "selected" : ""}
          >
            {category}
          </button>
        )
      ))}
    </div>
  );
}

export default CategoryFilter;