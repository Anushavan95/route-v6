import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/builder">builder</Link>
        </li>
        <li>
          <Link to="/builder/catalog">/builder/catalog</Link>
        </li>
      </ul>
    </nav>
  );
}
