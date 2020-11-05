import React from "react";

import { SITE_NAME } from "../../config";

export default function Header() {
  return (
    <div className="app-header">
      <div className="logo-container">🛍 {SITE_NAME}</div>
      <nav className="app-navigation">
        <ul className="app-navbar">
          <li className="navbar-item">Home</li>
          <li className="navbar-item">Category</li>
          <li className="navbar-item">Sale</li>
          <li className="navbar-item">
            <input
              type="text"
              className="search-box"
              placeholder="Search product"
            />
          </li>
          <li className="navbar-item">My Account</li>
          <li className="navbar-item">Cart</li>
        </ul>
      </nav>
    </div>
  );
}
