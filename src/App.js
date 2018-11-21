import React, { Component } from "react";
import "./App.css";

import Form from "./components/Form";
import Recipes from "./components/Recipes";

const api_key = "92183a4ab2c022ae98052ebaa8655e51";
class App extends Component {
  state = {
    recipes: []
  };
  getRecipe = async e => {
    const recipeName = e.target.elements.recipeInput.value;
    e.preventDefault();
    const api_url = await fetch(
      `http://food2fork.com/api/search?key=${api_key}&q=${recipeName}&count=15`
    );
    const data = await api_url.json();
    this.setState({ recipes: data.recipes });
  };
  componentDidMount() {
    const recipesFromLS = localStorage.getItem("recipes");
    const recipes = JSON.parse(recipesFromLS);
    this.setState({ recipes });
  }

  componentDidUpdate() {
    const recipeJson = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipeJson);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search App</h1>
        </header>
        <Form pullRecipe={this.getRecipe} />
        <Recipes recipesList={this.state.recipes} />
      </div>
    );
  }
}

export default App;
