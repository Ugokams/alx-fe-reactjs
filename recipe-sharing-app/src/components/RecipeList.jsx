import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const recipes = useRecipeStore((state) =>
    searchTerm ? state.filteredRecipes : state.recipes
  );

  if (recipes.length === 0) {
    return <p>No recipes found.</p>;
  }

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: "1px solid #ccc",
            padding: "12px",
            marginBottom: "10px",
            borderRadius: "6px",
          }}
        >
          <Link
            to={`/recipe/${recipe.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
