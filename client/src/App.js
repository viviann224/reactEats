import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import Footer from "./components/Footer";
import API from "./utils/API";
import { RecipeList, RecipeListItem } from "./components/RecipeList";
import { Container, Row, Col } from "./components/Grid";
import "./App.css";
// import { FacebookLoginButton } from 'react-social-login-buttons';
// import{ Form, FormGroup, Label } from 'reactstrap';


class App extends Component
{
  state = {
    recipes: [],
    recipeSearch: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
      //name input = value of input
      //[name]=recipeSearch
      //value= "chicken"
      //recipeSearch:"chicken"
    });

  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    //App.js=> API.js=> apiRoute.js=>API.js=>App.js (returns out the array of object for chicken search query in json format)
    event.preventDefault();
    API.getRecipes(this.state.recipeSearch)
      .then(res => this.setState({ recipes: res.data }))
      .catch(err => console.log(err));

  };

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
              <form>
            <Col size="md-12">
              <Container>
                  <Row>
                    <Col size="8 md-8 sm-8">
                      <Input
                        name="recipeSearch"
                        value={this.state.recipeSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Recipe"
                      />
                    </Col>
                    <Col size="4 md-4 sm-4">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                      Search
                      </Button>
                    </Col>
                  </Row>
              </Container>
            </Col>
            </form>
          </Row>
          <Row>
            <Col size="xs-12">

              {!this.state.recipes.length ? (
                <h1 className="text-center">No Recipes to Display</h1>
              ) : (
                <ul className="list-group">
                  <li className="list-group-item list-group-item-light resultsTitle"><strong>Results</strong></li>
                <RecipeList>
                  {this.state.recipes.map(recipe => {
                    return (
                      <RecipeListItem
                        key={recipe.title}
                        title={recipe.title}
                        href={recipe.href}
                        ingredients={recipe.ingredients}
                        thumbnail={recipe.thumbnail}
                      />
                    );
                  })}
                </RecipeList>
              </ul>
              )}
            </Col>
          </Row>

        </Container>
          <Footer />
      </div>

    );
  }
}
export default App;
