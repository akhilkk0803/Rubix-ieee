import React from "react";
import "./Join.css";
import { NavLink } from "react-router-dom";
const ButtonGroup = () => {
  return (
    <div className="button-group">
      <NavLink to="/join">
        <button class="button1" role="button">
          Join a team
        </button>
      </NavLink>
      <NavLink to="/hacker">
        <button class="button1" role="button">
          Find Hackers
        </button>
      </NavLink>
    </div>
  );
};

export default ButtonGroup;
