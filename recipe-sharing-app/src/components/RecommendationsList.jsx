import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";
import React from "react";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  // Generate recommendations whenever this component mounts
  React.useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  if (recommendations.length === 0) return <p>No recommendations yet.</p>;

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Recommended for You</h2>
      {recommendations.map((recipe) => (
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
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
