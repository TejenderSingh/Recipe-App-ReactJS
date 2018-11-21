import React from 'react';

const Form = props => (
   <form onSubmit={props.pullRecipe} style={{ marginBottom: "2rem" }}>
       <input className="form__input" type="text" name="recipeInput"/>
       <button className="form__button">Search</button>
   </form>
);
export default Form;