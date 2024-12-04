import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>RBAC Dashboard</h1>
            <ul>
                <li><Link to="/users">User Management</Link></li>
                <li><Link to="/roles">Role Management</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
