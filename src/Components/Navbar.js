import React from "react";
import { Link } from "react-router-dom";
import Weather from "./Weather";
import Bookmarks from "./Bookmarks";

const Navbar = () => {
  return (
    <div className="w-full">
      <ul className="flex justify-center gap-3 p-4">
        <li>
          <Link to="/">Weather</Link>
        </li>
        <li>
          <Link to="/bookmarks">Bookmarks</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
