import React from "react";
import { Link } from "react-router-dom";

const Recipes = props => (
  <div className="container">
    <div className="row">
      {props.recipesList.map(recipe => {
        return (
          <div
            key={recipe.recipe_id}
            className="col-md-6 col-lg-4"
            style={{ marginBottom: "2rem" }}
          >
            <div className="recipes__box">
              <img
                className="recipe__img"
                src={recipe.image_url}
                alt={recipe.title}
              />
              <div className="recipe__text">
                <h5 className="recipes__title text-uppercase">
                  {recipe.title.length < 17
                    ? `${recipe.title}`
                    : `${recipe.title.substring(0, 20)}...`}
                </h5>
                <p className="recipes__subtitle">
                  Publisher:
                  <span>{recipe.publisher}</span>
                </p>
              </div>
              <Link
                className="recipe__button text-uppercase"
                to={{
                  pathname: `/recipe/${recipe.recipe_id}`,
                  state: { recipe: recipe.title }
                }}
                // style={{ textDecoration: "none", padding: "0.4rem .8rem" }}
              >
                View Recipe
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Recipes;
