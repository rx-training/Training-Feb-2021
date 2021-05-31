import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SingleCocktail(props) {
  const { id } = useParams();
  const handleToggle = props.handleToggle;

  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    handleToggle(true);
    document.getElementById("root").style.background =
      "linear-gradient(to left, #ffe8e8 75%, #ff8080 25%)";
    document.body.style.background = "#ff8080";
  }, []);

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const { drinks } = await res.json();
      if (drinks) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = drinks[0];
        const newCocktail = {
          name,
          image,
          info,
          category,
          glass,
          instructions,
          ingredients: [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ],
        };
        setCocktail(newCocktail);
      } else {
        setCocktail(null);
      }
      setLoading(false);
    }

    getCocktail();
  }, [id]);

  if (loading) {
    return <h3 className="text-center text-muted py-3">Loading...</h3>;
  }
  if (!cocktail) {
    return (
      <h3 className="text-center text-muted py-3">No cocktail to display</h3>
    );
  } else {
    const { name, image, info, category, glass, instructions, ingredients } =
      cocktail;
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h6 className="text-white p-4">Ingredients</h6>
            <ul className="list-group">
              {ingredients.map((item, index) => {
                return (
                  <li
                    className="text-white ps-4 list-group-item bg-transparent border-0"
                    key={index}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-4">
                <img
                  src={image}
                  alt=""
                  className="card-img-top my-5 rounded-0"
                />
              </div>
              <div className="col-lg-8">
                <table className="table my-5 p-0">
                  <tbody>
                    <tr>
                      <td className="px-3" style={{ width: "10rem" }}>
                        Name :{" "}
                      </td>
                      <td>{name}</td>
                    </tr>
                    <tr>
                      <td className="px-3">Category :</td>
                      <td>{category}</td>
                    </tr>
                    <tr>
                      <td className="px-3">Info :</td>
                      <td>{info}</td>
                    </tr>
                    <tr>
                      <td className="px-3">Glass :</td>
                      <td>{glass}</td>
                    </tr>
                    <tr>
                      <td className="px-3">Instructions :</td>
                      <td>{instructions}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
