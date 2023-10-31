import React from "react";

function RecipeItem({ recipe, deleteRecipe }) {
  return (
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>{recipe.photoUrl}</td>
      <td>{recipe.ingredients}</td>
      <td>{recipe.preparation}</td>
      <td>
        <button name="delete" onClick={() => deleteRecipe(recipe.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default RecipeItem;