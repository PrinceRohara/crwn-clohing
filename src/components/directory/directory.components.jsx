import "./directory.styles.scss";
import CategoriesData from "../category-data/category-data.components";
import CategoryItems from "../category-items/category-items.components";

const Directory = () => {
  return (
    <div className="categories-container">
      {CategoriesData.map((category) => (
        <CategoryItems key={category.id} category={category} />
        // <h2>{title}</h2>
      ))}
    </div>
  );
};

export default Directory;
