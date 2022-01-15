import React from "react";

const CategorySlider = () => {
  const categories = [
    "business",
    "entertainment",
    "environment",
    "food",
    "health",
    "politics",
    "science",
    "sports",
    "technology",
    "top",
    "world ",
  ];
  const items = categories.map((item, i) => {
    return (
      <a key={i} className="tag is-rounded is-primary is-capitalized">
        {item}
      </a>
    );
  });
  return (
    <div className="container">
      <div className="tags">{items}</div>
    </div>
  );
};

export default CategorySlider;
