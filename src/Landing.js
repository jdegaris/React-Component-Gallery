import React, { Fragment } from 'react'
import { Route, Switch, Link } from 'react-router-dom';
import './Landing.css';
import Project1 from './img/LandingArticleGalleryFlexbox.png'
import Project2 from './img/NavbarLogoCenter.png'

import Navbar from './navbar-components/Navbar-Logo-Center/NavbarLogoCenter'
import LandingPage from './landing-components/Landing-Article-Gallery/LandingArticleGalleryFlexbox'


const Landing = () => {
    
    return (
        <Fragment>
            <div className="title">
                <h1>Components</h1>
            </div>
            <div className="filter">
                <button name='navbar' >Navbar</button>
                <button name='landing' >Landing</button>
                <button name='content' >Content</button>
                <button name='forms' >Forms</button>
            </div>
        <div className='container'>
            
            <section className='component-item'>        
                <div className="component-screen">
                    <img src={Project1} alt=""/>
                </div>
                <Link to='/LandingPageGalleryFlexbox'>
                    <div className="component-description">
                        <h3>Flexbox Landing Article Gallery</h3>
                    </div>
                </Link>
            </section>

            <section className='component-item'>        
                <div className="component-screen">
                    <img src={Project2} alt=""/>
                </div>
                <Link to='/NavbarLogoCenter'>
                    <div className="component-description">
                        <h3>Navbar Logo Centered </h3>
                    </div>
                </Link>
            </section>

        </div>
        </Fragment>
    )
}

export default Landing
