import React, { Component } from "react";
import { Link } from "react-router-dom";

const api_key = "92183a4ab2c022ae98052ebaa8655e51";

class Recipe extends Component {
  state = {
    activeRecipe: []
  };
  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const req = await fetch(
      `http://food2fork.com/api/search?key=${api_key}&q=${title}`
    );
    const res = await req.json();
    this.setState({ activeRecipe: res.recipes[0] });
    // console.log(this.state.activeRecipe);
  };
  render() {
    const recipe = this.state.activeRecipe;
    return (
      <div className="container">
        {recipe.length !== 0 && (
          <div className="active-recipe col-">
            <img
              className="active-recipe__img "
              src={recipe.image_url}
              alt={recipe.title}
            />
            <h3 className="active-recipe__title text-uppercase">
              {recipe.title}
            </h3>
            <h4 className="active-recipe__publisher">
              Publisher: <span>{recipe.publisher}</span>
            </h4>
            <p className="active-recipe__website">
              Website:{" "}
              <span>
                <a href={recipe.publisher_url}>{recipe.publisher_url}</a>
              </span>
            </p>
            <Link className="active-recipe__button" to="/">
              Go back
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default Recipe;
