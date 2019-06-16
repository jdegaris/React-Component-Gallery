import React from 'react';
import { Link } from 'react-router-dom';
import './LandingArticleGalleryFlexbox.css';

const LandingPageGallery = () => {
    return (
        <div className='landing-gallery-flex'>
            <div className="gallery-item one" >
            <Link>
                <article className="landing-article">
                    <div className="article-headline">
                        <h2>Article Title</h2>
                    </div>
                </article>
            </Link>
            </div>
            <div className="gallery-item two">
            <Link>
                <article className="landing-article">
                    <div className="article-headline">
                        <h2>Article Title</h2>
                    </div>
                </article>
            </Link>    
            </div>
            <div className="break"></div>

            <div className="gallery-item three" >
            <Link>
                <article className="landing-article">
                    <div className="article-headline">
                        <h2>Article Title</h2>
                    </div>
                </article>
            </Link>
            </div>
            <div className="gallery-item four">
            <Link>
                <article className="landing-article">
                    <div className="article-headline">
                        <h2>Article Title</h2>
                    </div>
                </article>
            </Link>
            </div>
            <div className="break"></div>

            <div className="gallery-item five" >
            <Link>
                <article className="landing-article">
                    <div className="article-headline">
                        <h2>Article Title</h2>
                    </div>
                </article>
            </Link>
            </div>
            <div className="gallery-item six">
            <Link>
                <article className="landing-article">
                    <div className="article-headline">
                        <h2>Article Title</h2>
                    </div>
                </article>
            </Link>
            </div>
        </div>
    )
}

export default LandingPageGallery
