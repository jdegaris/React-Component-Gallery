import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import './Landing.css';
import { components } from './components'; 
import image1 from './img/LandingArticleGalleryFlexbox.png'; 
import image2 from './img/NavbarLogoCenter.png'; 
import image3 from './img/ContentImageCarouselFS.png'; 


const Landing = () => {

    const images = [
        image1,
        image2,
        image3
    ]

    components.map((component, index) => {
        return component.image = images[index];
    })

    const [comps, setComps] = useState(components);
    const [compNav, setCompNav] = useState(true);

    const compFilter = (e) => {
        setCompNav(false)
        setComps(comps.filter(comp => {
        return comp.type === e.target.name
    }))
}

    const backToAll = () => {
        setComps(components)
        setCompNav(true);
    }

    return (
        <Fragment>
            <div className="title">
                <h1>Components</h1>
            </div>
            { compNav ? ( <div className="filter">
                <button className='btn btn-primary' name='navbar' onClick={compFilter} >Navbar</button>
                <button className='btn btn-dark' name='landing' onClick={compFilter} >Landing</button>
                <button className='btn btn-light' name='content' onClick={compFilter} >Content</button>
                <button className='btn btn-success' name='forms' onClick={compFilter} >Forms</button>
            </div> )
            : (
                <div className="filter">
                    <button onClick={ backToAll } >Back to All</button>
                </div>
            )}
        <div className='container'>

            { comps.map((component, index) => {
                return <section key={index} className='component-item'>        
                            <div className="component-screen">
                                <div className="component-screen-front">
                                    <img src={component.image} alt=""/>
                                </div>
                                <div className="component-screen-back">
                                    <p>{component.description}</p>
                                </div>
                                
                            </div>
                            <Link to={component.link}>
                                <div className="component-description">
                                    <h3>{ component.name }</h3>
                                </div>
                            </Link>
                        </section>
            })  }
            


        </div>
        </Fragment>
    )
}

export default Landing
