import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarLogoCenter.css';

const NavbarLogoCenter = () => {
    return (
        <nav>
            <div className="logo">
            <i class="fab fa-react"></i>
            </div>
            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Shop</li>
                </ul>
            </div>
            
        </nav>
    )
}
    
export default NavbarLogoCenter