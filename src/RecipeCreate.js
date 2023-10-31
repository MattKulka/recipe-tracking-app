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

  //Create Recipe Input Field
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">Dish name</label>
              <br />
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </td>
            <td>
              <label htmlFor="cuisine">Cuisine</label>
              <br />
              <input
                type="text"
                id="cuisine"
                name="cuisine"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
              />
            </td>
            <td>
              <label htmlFor="photo">Photo</label>
              <br />
              <input
                type="url"
                id="photo"
                name="photo"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
            </td>
            <td>
              <label htmlFor="ingredients">Ingredients</label>
              <br />
              <textarea
                type="text"
                id="ingredients"
                name="ingredients"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
              />
            </td>
            <td>
              <label htmlFor="preparation">Preparation</label>
              <br />
              <textarea
                type="text"
                id="preparation"
                name="preparation"
                value={preparation}
                onChange={(e) => setPreparation(e.target.value)}
              />
            </td>
            <td>
              <label htmlFor="action">Action</label>
              <br />
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;





