import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../redux/favoriteSlice';

const RecipeCard = ({ recipe }) => {
  const dispatch = useDispatch();

  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.label} />
      <h3>{recipe.label}</h3>
      <button onClick={() => dispatch(addFavorite(recipe))}>❤️ Favorite</button>
      <Link to={`/recipe/${encodeURIComponent(recipe.uri)}`}>View Details</Link>
    </div>
  );
};

export default RecipeCard;
