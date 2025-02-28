import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useSelector((state) =>
    state.recipes.recipes.find((r) => r.id.toString() === id)
  );

  if (!recipe) return <h2>Recipe not found</h2>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
    </div>
  );
};

export default RecipeDetails;
//