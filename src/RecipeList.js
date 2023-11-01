import React from "react";

function RecipeList({ recipes, deleteRecipe }) {
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Dish name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe.name}>
              <td>{recipe.name}</td>
              <td>{recipe.cuisine}</td>
              <td>
                <img
                  src={recipe.photo || 'http://www.nopicavailable.com'}
                  alt={recipe.name}
                  style={{ maxWidth: '150px', maxHeight: '150px' }}
                />
              </td>
              <td>{recipe.ingredients}</td>
              <td>{recipe.preparation}</td>
              <td>
                <button name="delete" onClick={() => deleteRecipe(recipe)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;




