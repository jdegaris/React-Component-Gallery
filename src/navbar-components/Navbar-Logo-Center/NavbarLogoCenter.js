import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarLogoCenter.css';

const NavbarLogoCenter = () => {
    return (
        <nav>
            <div className="logo">
            <Link to="#" ><i class="fab fa-react"></i></Link>
            </div>
            <div className="menu">
                <ul>
                    <Link to="#" ><li>Home</li></Link>
                    <Link to="#" ><li>About</li></Link>
                    <Link to="#" ><li>Shop</li></Link>
                </ul>
            </div>
            
        </nav>
    )
}
    
export default NavbarLogoCenter