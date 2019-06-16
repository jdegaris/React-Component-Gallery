import React, { Fragment, useState, useEffect } from 'react';
import { images } from './images';
import { Gallery, GalleryImage } from 'react-gesture-gallery';

const INITIAL_INDEX = 0;

const LandingImageCarouselFS = () => {
    const [index, setIndex] = useState(INITIAL_INDEX);

    useEffect(() => {
        const interval = setInterval(() => {
            if (index === images.length - 1) {
                setIndex(INITIAL_INDEX);
            } else {
                setIndex(index + 1)
            }
        }, 2500)
        return () => clearInterval(interval);
    }, [index])

    return (
        <Fragment>
        <Gallery 
        style= {{
            height: '92vh',
            width: '100vw',
            background: 'black',
        }}
            index={index}
            onRequestChange={i => {
                setIndex(i);
            }}
        >
            {images.map(image => {
                return <GalleryImage 
                            objectFit='cover'
                            src={image} 
                        />
            })}
        </Gallery>
        <div className="get-code">
            <button>
                Get Code
            </button>
        </div>
    </Fragment>
    )
}

export default LandingImageCarouselFS
