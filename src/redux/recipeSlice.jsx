import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Spoonacular API (Replace with your own API Key)
const API_KEY = "5756fa35cffd4e85aa8f25dbd0e2b78e";
const API_URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=20`;

// Fetch recipes
export const fetchRecipes = createAsyncThunk("recipes/fetchRecipes", async () => {
  const response = await axios.get(API_URL);
  return response.data.results;
});

const recipeSlice = createSlice({
  name: "recipes",
  initialState: {
    recipes: [],
    favorites: [],
    status: "idle",
    error: null,
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const recipe = action.payload;
      const exists = state.favorites.find((fav) => fav.id === recipe.id);
      if (exists) {
        state.favorites = state.favorites.filter((fav) => fav.id !== recipe.id);
      } else {
        state.favorites.push(recipe);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.recipes = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { toggleFavorite } = recipeSlice.actions;
export default recipeSlice.reducer;
//
