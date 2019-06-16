import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import LandingArticleGalleryFlexbox from './landing-components/Landing-Article-Gallery/LandingArticleGalleryFlexbox'
import ContentImageCarouselFS from './content-components/Image-Carousel-AutoGesture/ImageCarouselAutoGesture'
import NavbarLogoCenter from './navbar-components/Navbar-Logo-Center/NavbarLogoCenter'


import './App.css';

const App = () => {
  return <Router>
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/LandingArticleGalleryFlexbox' component={LandingArticleGalleryFlexbox} />
      <Route exact path='/ContentImageCarouselFS' component={ContentImageCarouselFS} />
      <Route exact path='/NavbarLogoCenter' component={NavbarLogoCenter} />
    </Switch>
    
</Router>
}

export default App;
