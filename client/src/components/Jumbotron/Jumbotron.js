import React from "react";
import "./Jumbotron.css";



const Jumbotron = () => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4 logo"><strong>React Eats</strong></h1>
      <p className="lead"><a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.recipepuppy.com/about/api/"
      >
        <small>Powered by Recipe Puppy</small>
      </a></p>

    </div>
  </div>
);

export default Jumbotron;
