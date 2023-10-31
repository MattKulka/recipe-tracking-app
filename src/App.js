import React, { useState } from "react";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const createRecipe = (newRecipe) => {
    // Check if any of the required fields are empty
    if (
      newRecipe.name.trim() === "" ||
      newRecipe.cuisine.trim() === "" ||
      newRecipe.ingredients.trim() === "" ||
      newRecipe.preparation.trim() === ""
    ) {
      alert("Please fill in all required fields before adding a recipe.");
      return;
    }

    setRecipes([...recipes, newRecipe]);
  };

  const deleteRecipe = (recipeToDelete) => {
    const updatedRecipes = recipes.filter(
      (recipe) => recipe.name !== recipeToDelete.name
    );
    setRecipes(updatedRecipes);
  };

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>

      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />

      <RecipeCreate createRecipe={createRecipe} />
    </div>
  );
}

export default App;


