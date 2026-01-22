import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <Router>
      <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
        <h1 style={{ textAlign: "center" }}>Recipe App</h1>

        {/* Always visible components */}
        <SearchBar />
        <AddRecipeForm />
        <RecipeList />

        <hr />

        <Routes>
          {/* Route to view a recipe by its ID */}
          <Route
            path="/recipe/:id"
            element={<RecipeDetailsWrapper />}
          />
        </Routes>
      </div>
    </Router>
  );
}

// Wrapper to get recipeId from URL params
import { useParams } from "react-router-dom";
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  const recipeId = parseInt(id, 10); // Convert string to number
  return <RecipeDetails recipeId={recipeId} />;
};

export default App;