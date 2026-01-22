import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites
      .map((id) => state.recipes.find((recipe) => recipe.id === id))
      .filter(Boolean) // Remove any undefined if recipe was deleted
  );

  if (favorites.length === 0) return <p>No favorite recipes yet.</p>;

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>My Favorites</h2>
      {favorites.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: "1px solid #ccc",
            padding: "12px",
            marginBottom: "10px",
            borderRadius: "6px",
          }}
        >
          <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: "none" }}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
          <FavoriteButton recipeId={recipe.id} /> {/* Allow removing from favorites */}
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
