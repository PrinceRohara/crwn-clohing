import "./directory.styles.scss";

import CategoryItems from "../category-items/category-items.components";

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItems key={category.id} category={category} />
        // <h2>{title}</h2>
      ))}
    </div>
  );
};

export default Directory;
