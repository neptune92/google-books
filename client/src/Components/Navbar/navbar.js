import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
    <div class="nav-wrapper indigo darken-4">
      <Link class="brand-logo center indigo darken-4" to="/">Google Books</Link>
      <ul id="nav-mobile" class="left hide-on-med-and-down indigo darken-4">
        
        <li><Link to="/">
          Search
        </Link></li>
        <li><Link to="/save">
          Saved Books
        </Link></li>
      </ul>
    </div>
  </nav>
    )
}

export default Navbar