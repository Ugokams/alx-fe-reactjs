import { create } from "zustand";

export const useRecipeStore = create((set, get) => ({
  recipes: [],

  // Search term for filtering
  searchTerm: "",
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(); // Recompute filtered recipes whenever term changes
  },

  // Filtered results
  filteredRecipes: [],

  // Add recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  // Update recipe
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      ),
    })),

  // Delete recipe
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),

  // Compute filtered recipes based on search term
  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    set({
      filteredRecipes: recipes.filter((r) =>
        r.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    });
  },
}));
