import React from "react";
import { Link } from "react-router-dom";


export default function MemeberNavbar() {
  return (
    <div>
      <navbar className="navbar">
        <h3 className="teammeber">TEAMS-MEMBER</h3>
        <ul className="nav-links">
          <Link to="/" className="teammember">
            <li>ADD MEMBER</li>
          </Link>
          <Link to="/" className="teammember">
            <li>GET MEMBER  </li>
          </Link>
          <Link to="/" className="teammember">
            <li>UPADTE MEMBER</li>
          </Link>
          <Link to="/" className="teammember">
            <li>DELETE MEMBER</li>
          </Link>
        </ul>
      </navbar>
    </div>
  );
}
