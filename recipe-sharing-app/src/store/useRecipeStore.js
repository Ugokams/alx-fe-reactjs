import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],

  // Add a new recipe to the list
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  // Initialize or replace the entire recipe list
  setRecipes: (recipes) =>
    set({ recipes }),
}));

export default useRecipeStore;
