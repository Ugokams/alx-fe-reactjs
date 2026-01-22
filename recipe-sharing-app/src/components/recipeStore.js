import { create } from "zustand";

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  
  // Favorites feature
  favorites: [],
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Recommendations
  recommendations: [],
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(
      (recipe) => favorites.includes(recipe.id) && Math.random() > 0.5
    );
    set({ recommendations: recommended });
  },

  // Existing search/filter state
  searchTerm: "",
  filteredRecipes: [],
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },
  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    set({
      filteredRecipes: recipes.filter((r) =>
        r.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    });
  },

  // Existing CRUD actions
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      ),
    })),
  deleteRecipe: (id) =>
    set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),
}));
