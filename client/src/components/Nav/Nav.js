import React from "react";
import "./Nav.css";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <span className="navbar-brand logo text-center" >React Eats</span>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <p></p>
      <li className="nav-item active text-center cl-effect-10">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active text-center">
        <a className="nav-link" data-toggle="modal" data-target="#aboutModal" href="#">About</a>

      </li>

      {/* <!-- Modal --> */}
      <div className="modal fade" id="aboutModal" tabIndex="-1" role="dialog" aria-labelledby="aboutModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="aboutModalLabel">About ReactEats</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p><strong>ReactEats</strong> is a food application created to find recipes from Recipe Puppy.</p>

              <p>The application began as a way to demonstrate the usage of React and usage of an API. The application was created via Atom, Adobe Photoshop, and Bootstrap.</p>
              <p><strong>ReactEats</strong> contains a series of recipes that anyone can search and view.</p>
                <p><strong>ReactEats</strong> is a React application which runs via Heroku deployment.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              {/* <button type="button" className="btn btn-primary">Save changes</button> */}
            </div>
          </div>
        </div>
      </div>
      {/* <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}
    </ul>
  </div>
  {/* login | logout */}
</nav>
);

export default Nav;
