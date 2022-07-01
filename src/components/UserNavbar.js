import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
    <navbar className="navbar">
        <h3 className='logo'>USERS</h3>
        <ul className='nav-links'>
            <Link to="/" className="user">
            <li>ADD USERS</li>
            </Link>
            <Link to="/" className="user">
            <li>GET USERS</li>
            </Link>
            <Link to="/" className="user">
            <li>UPADTE USERS</li>
            </Link>
            <Link to="/" className="user">
            <li>DELETE USERS</li>
            </Link>
        </ul>
    </navbar>
    </div>
  )
}

export default Navbar