import { useState } from "react";
import "./CategorySelector.css";

const CategorySelector = () => {
  const [selected, setSelected] = useState(null);

  const handleClick = (category) => {
    setSelected(selected === category ? null : category);
  };

  return (
    <div className="category-container">
      {["Frames", "Polaroids", "Bookmarks"].map((category) => (
        <button
          key={category}
          className={`category-btn ${selected === category ? "selected" : ""}`}
          onClick={() => handleClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategorySelector;
