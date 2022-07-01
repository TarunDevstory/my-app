import React from 'react'
import {Link} from "react-router-dom";

const TeamNavbar = () => {
  return (
    <div>
    <navbar className="navbar">
        <h3 className='TEAMS'>TEAMS</h3>
        <ul className='nav-links'>
            <Link to="/" className="TEAMS">
            <li>ADD TEAMS</li>
            </Link>
            <Link to="/" className="TEAMS">
            <li>GET TEAMS</li>
            </Link>
            <Link to="/" className="TEAM">
            <li>UPADTE TEAMS</li>
            </Link>
            <Link to="/" className="TEAM">
            <li>DELETE TEAMS</li>
            </Link>
        </ul>
    </navbar>
    </div>
  )
}

export default TeamNavbar