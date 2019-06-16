import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Landing from './Landing';
import LandingPageGalleryFlexbox from './landing-components/Landing-Article-Gallery/LandingArticleGalleryFlexbox'
import NavbarLogoCenter from './navbar-components/Navbar-Logo-Center/NavbarLogoCenter'


import './App.css';

const App = () => {
  return <Router>
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/LandingPageGalleryFlexbox' component={LandingPageGalleryFlexbox} />
      <Route exact path='/NavbarLogoCenter' component={NavbarLogoCenter} />
    </Switch>
    
</Router>
}

export default App;
