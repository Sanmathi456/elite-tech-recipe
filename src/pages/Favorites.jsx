import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../redux/recipeSlice";
import "../app.css";
import Footer from "../components/Footer";

const Favorites = () => {
  const favorites = useSelector((state) => state.recipes.favorites);
  const dispatch = useDispatch();

  if (favorites.length === 0) return <h2>No favorite recipes yet</h2>;

  return (
    <div>
      <h2 id="fav-head">Favorite <span id="highlight">Recipes</span></h2>
      <div className="recipe-list">
        {favorites.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <div className="image-container">
              <img src={recipe.image} alt={recipe.title} />
              <span
  className="favorite-icon favorited"
  onClick={() => {
    dispatch(toggleFavorite(recipe));
    alert(`${recipe.title} has been removed from favorites!`);
  }}
>
  ❤️
</span>

            </div>
            <h3>{recipe.title}</h3>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Favorites;
