// src/components/Navbar.js

import React from "react";

const Navbar = ({ setActiveCategory }) => {
  const categories = [
    "General",
    "Sports",
    "Entertainment",
    "Health",
    "Business",
    "Science",
    "Technology",
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => setActiveCategory(category.toLowerCase())}
          >
            {category}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
