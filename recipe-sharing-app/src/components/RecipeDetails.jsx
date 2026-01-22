import { useState } from "react";
import { useRecipeStore } from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";
import FavoriteButton from "./FavoriteButton";

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );

  // State to show/hide the edit form
  const [isEditing, setIsEditing] = useState(false);

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
        marginBottom: "20px",
      }}
    >
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      {/* Favorite Button */}
      <FavoriteButton recipeId={recipe.id} />

      {/* Edit and Delete buttons */}
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setIsEditing(!isEditing)} style={{ marginRight: "10px" }}>
          {isEditing ? "Cancel Edit" : "Edit Recipe"}
        </button>

        <DeleteRecipeButton recipeId={recipe.id} />
      </div>

      {/* Show EditRecipeForm if editing */}
      {isEditing && <EditRecipeForm recipe={recipe} onClose={() => setIsEditing(false)} />}
    </div>
  );
};

export default RecipeDetails;
