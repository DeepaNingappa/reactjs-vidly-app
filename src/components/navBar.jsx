import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="#">
        Vidly
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/movies">
            Movies
          </NavLink>
          <NavLink className="nav-item nav-link" to="/customers">
            Customers
          </NavLink>
          <NavLink className="nav-item nav-link" to="/rentals">
            Rentals
          </NavLink>
          <NavLink className="nav-item nav-link" to="/login">
            Login
          </NavLink>
          <NavLink className="nav-item nav-link" to="/register">
            Register
          </NavLink>
        </div>
      </div>
    </nav>
    // <nav classNameName="navbar navbar-expand-lg navbar-light bg-light">
    //   <NavLink classNameName="navbar-brand" to="/movies">
    //     Vidly
    //   </NavLink>
    //   <div classNameName="collapse navbar-collapse" id="navbarNav">
    //     <ul classNameName="navbar-nav">
    //       <li classNameName="nav-item">
    //         <NavLink classNameName="nav-NavLink" to="/movies">
    //           Movies
    //         </NavLink>
    //       </li>
    //       <li classNameName="nav-item">
    //         <NavLink classNameName="nav-NavLink" to="/customers">
    //           Customers
    //         </NavLink>
    //       </li>
    //       <li classNameName="nav-item">
    //         <NavLink classNameName="nav-NavLink" to="/rentals">
    //           Rentals
    //         </NavLink>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
};

export default NavBar;
