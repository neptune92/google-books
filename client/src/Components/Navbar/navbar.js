import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
    <div class="nav-wrapper">
      <Link class="brand-logo" to="/">Google Books</Link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        
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