import React, { useState } from 'react';
import './LandingFullScreenGallery.css';

const images = [
    "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/default/0001/89/thumb_88508_default_news_size_5.jpeg",
    "https://www.dailyecho.co.uk/resources/images/9991689.jpg?display=1&htype=0&type=responsive-gallery",
    "https://media.newyorker.com/photos/5cd43cb3dc7f752e9bf1d7f3/master/w_649,c_limit/Caesar-ChampionsLeague.jpg",
    "https://www.channelstv.com/wp-content/uploads/2019/05/Liverpool-players-Celeberate-goal-against-Barcelona.jpg",
]


const LandingFullScreenGallery = () => {
    const [photo, setPhoto] = useState(0);
    if (photo > images.length - 1) {
        setPhoto(0)
    } else if (photo < 0) {
        setPhoto(images.length - 1)
    }

    return (
        <div className='fs-gallery'>
            <div className="slide-control control-left">
                <i class="fas fa-angle-left" onClick={() => {setPhoto(photo - 1)}}></i>
            </div>
            <div className="slide">
                <img src={images[photo]} alt=""/>
            </div>
            <div className="slide-control control-right" onClick={() => {setPhoto(photo + 1)}}>
                <i class="fas fa-angle-right"></i>
            </div>
        </div>
    )
}

export default LandingFullScreenGallery
