import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleFavorite } from "../redux/recipeSlice";
import bannerimg from "../assets/banner1.webp";
import "../styles/home.css";
import Footer from "../components/Footer";

const Home = () => {
  const { recipes, favorites, status } = useSelector((state) => state.recipes);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  if (status === "loading") return <h2>Loading...</h2>;
  if (status === "failed") return <h2>Error loading recipes</h2>;
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <div>
      <div className="section1">
        <div className="h-left">
          <p>
            Welcome to <span id="highlight">FlavorHeaven!</span>
          </p>
          <p>
            Discover mouth-watering recipes from around the world and save your
            favorites. Whether you're craving something{" "}
            <span id="highlight">sweet, spicy, or healthy,</span> we’ve got the
            perfect recipe for you!
          </p>
        </div>
        <div className="h-right">
          <img src={bannerimg} alt="pasta" />
        </div>
      </div>

      <div className="section2">
        <h1>
          Our <span id="highlight">Recipies</span>
        </h1>
        <input
          type="text"
          placeholder="Search Recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="recipe-list">
          {filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <div className="image-container">
                <img src={recipe.image} alt={recipe.title} />
                <span
                  className={`favorite-icon ${
                    favorites.some((fav) => fav.id === recipe.id)
                      ? "favorited"
                      : ""
                  }`}
                  onClick={() => {
                    dispatch(toggleFavorite(recipe));
                    alert(`${recipe.title} has been added to favorites!`);
                  }}
                >
                  ❤️
                </span>
              </div>
              <p>{recipe.title}</p>
              <Link to={`/recipe/${recipe.id}`} className="view">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
