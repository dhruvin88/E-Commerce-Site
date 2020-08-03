import React from 'react';
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/1">
              Page1
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/2">
              Page2
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/3">
              Page3
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/pay">
              Pay
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
};
