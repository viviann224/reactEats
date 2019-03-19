import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import logo from './logo.png';
import "./RecipeList.css";

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export const RecipeListItem = props => (
  <li className="list-group-item searchResultsEntries">
    <Container>
      <Row>
        <Col size="xs-4 sm-2">
          <Thumbnail src={props.thumbnail || logo} />
        </Col>
        <Col size="xs-8 sm-9">
          <h3 className="recipeTitle">{props.title}</h3>
          <p><small><strong>Ingredients:</strong> {props.ingredients}</small></p>
          <a rel="noreferrer noopener" target="_blank" href={props.href}  role="button" className="btn-sm btn btn-secondary recipeLink">Go to recipe!</a>
        </Col>
      </Row>
    </Container>
  </li>
);
