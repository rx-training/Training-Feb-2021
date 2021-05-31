import React, { useEffect, useState } from "react";
import cocktailImg from "../images/cocktail6.png";
import lemonImg from "../images/lemon.png";
import CocktailList from "../components/CocktailList";
import {
  FaShoppingCart,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaCaretRight,
} from "react-icons/fa";

export default function Home(props) {
  const search = props.search;
  const toggle = props.toggle;

  const [loading, setLoading] = useState(false);
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    if (toggle) {
      document.getElementById("root").style.background =
        "linear-gradient(to left, #ffe8e8 75%, #ff8080 25%)";
      document.body.style.background = "#ff8080";
    }
  }, [toggle]);

  useEffect(() => {
    setLoading(true);
    async function getDrinks() {
      try {
        const res = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
        );
        const { drinks } = await res.json();
        if (drinks) {
          const newCocktails = drinks.map((item) => {
            const {
              idDrink,
              strDrink,
              strDrinkThumb,
              strAlcoholic,
              strGlass,
              strIngredient1,
              strIngredient2,
              strIngredient3,
              strIngredient4,
              strIngredient5,
              strIngredient6,
              strIngredient7,
              strIngredient8,
              strIngredient9,
              strIngredient10,
              strIngredient11,
              strIngredient12,
              strIngredient13,
              strIngredient14,
              strIngredient15,
            } = item;
            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass,
              ingredients: [
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5,
                strIngredient6,
                strIngredient7,
                strIngredient8,
                strIngredient9,
                strIngredient10,
                strIngredient11,
                strIngredient12,
                strIngredient13,
                strIngredient14,
                strIngredient15,
              ],
            };
          });

          setCocktails(newCocktails);
        } else {
          setCocktails([]);
        }
      } catch (ex) {}
      setLoading(false);
    }

    getDrinks();
  }, [search]);

  return (
    <div className="home">
      {!toggle && (
        <>
          <div className="container">
            <div className="row">
              <div className="col-md-7 p-5">
                <h1
                  className="text-white text-uppercase fw-bold"
                  style={{ wordSpacing: "0.3rem" }}
                >
                  Cosmopolitan martini
                </h1>
                <p className="me-md-5 pe-md-4 text-white py-4">
                  The cosmo became almost ubiquitous in the '90s , 1.5 oz citrus
                  vodka, 1 oz Cointreau .5 oz lime juice .25 oz cranberry juice
                  Build all ingredients in a shaker tine with ice and shake.
                  Strain into a martini glass and garnish with lime wheel or
                  zest.
                </p>
                <button className="btn btnordernow text-white">
                  <FaShoppingCart /> Order Now
                </button>
              </div>
              <div className="col-md-5 p-5">
                <div className="d-none d-lg-block cocktailmix">
                  <div className="row">
                    <div className="col-7 m-0 p-0">
                      <hr />
                    </div>
                    <div className="col-5 m-0 p-0">
                      <span
                        className="d-flex align-items-center pt-1"
                        style={{ color: "#ff8080" }}
                      >
                        <FaCaretRight className="text-muted" />
                        1.5 oz
                        <span className="text-muted px-1"> / </span>
                        <span
                          className="text-muted"
                          style={{ fontSize: "0.8rem" }}
                        >
                          citrus vodka
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-7 m-0 p-0">
                      <hr />
                    </div>
                    <div className="col-5 m-0 p-0">
                      <span
                        className="d-flex align-items-center pt-1"
                        style={{ color: "#ff8080" }}
                      >
                        <FaCaretRight className="text-muted" />1 oz
                        <span className="text-muted px-1"> / </span>
                        <span
                          className="text-muted"
                          style={{ fontSize: "0.8rem" }}
                        >
                          Cointreau
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-7 m-0 p-0">
                      <hr />
                    </div>
                    <div className="col-5 m-0 p-0">
                      <span
                        className="d-flex align-items-center pt-1"
                        style={{ color: "#ff8080" }}
                      >
                        <FaCaretRight className="text-muted" />
                        .5 oz
                        <span className="text-muted px-1"> / </span>
                        <span
                          className="text-muted"
                          style={{ fontSize: "0.8rem" }}
                        >
                          lime juice
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="links">
            <ul>
              <li className="my-2">
                <a href="https://www.facebook.com" className="text-white">
                  <FaFacebookF />
                </a>
              </li>
              <li className="my-2">
                <a href="https://www.twitter.com" className="text-white">
                  <FaTwitter />
                </a>
              </li>
              <li className="my-2">
                <a href="https://www.instagram.com" className="text-white">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
          <img src={cocktailImg} alt="" className="cocktailglass saturate" />
          <img src={lemonImg} alt="" className="lemon saturate" />

          <div className="imggroup">
            {cocktails[0] ? (
              <>
                <img src={cocktails[10].image} alt="" />
                <img src={cocktails[1].image} alt="" className="active" />
                <img src={cocktails[19].image} alt="" />
                <img src={cocktails[5].image} alt="" />
                <img src={cocktails[23].image} alt="" />
              </>
            ) : (
              ""
            )}
          </div>
        </>
      )}

      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-9">
          {toggle && (
            <div className="cocktailsdiv">
              <CocktailList loading={loading} cocktails={cocktails} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
