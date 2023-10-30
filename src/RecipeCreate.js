import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newRecipe = {
      name,
      cuisine,
      photo: photoUrl,
      ingredients,
      preparation,
    };

    createRecipe(newRecipe);

    setName("");
    setCuisine("");
    setPhotoUrl("");
    setIngredients("");
    setPreparation("");
  };

  return (
    <form name="create" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
      <table>
        <tbody>
          <tr>
            <td>
              <label>Dish name:</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </td>
            <td>
              <label>Cuisine:</label>
              <input
                type="text"
                name="cuisine"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
              />
            </td>
            <td>
              <label>Photo URL:</label>
              <input
                type="url"
                name="photo"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
            </td>       
            <td>
              <label>Ingredients:</label>
              <textarea
                name="ingredients"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
              />
            </td>
            <td>
              <label>Preparation:</label>
              <textarea
                name="preparation"
                value={preparation}
                onChange={(e) => setPreparation(e.target.value)}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;


