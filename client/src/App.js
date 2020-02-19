import React, { Fragment } from 'react';
// Layout Imports
import Navbar from './components/layout/Navbar';
import FilmNavbar from './components/layout/FilmNavbar';
// Routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import PrivateRoute from './components/routing/PrivateRoute';
// Pages
import Homepage from './components/pages/Homepage';
import AboutPage from './components/pages/AboutPage';
import FilmmakersPage from './components/pages/FilmmakersPage';
import DevelopmentPage from './components/pages/DevelopmentPage';
import ProductionPage from './components/pages/ProductionPage';
import DistributionPage from './components/pages/DistributionPage';
import GalleryPage from './components/pages/GalleryPage';
import ShopPage from './components/pages/ShopPage';
import StoryPage from './components/pages/StoryPage';
import CastingPage from './components/pages/CastingPage';
import LocationsPage from './components/pages/LocationsPage';
import CostumesPage from './components/pages/CostumesPage';
import VfxPage from './components/pages/VfxPage';
import PropsPage from './components/pages/PropsPage';
import MusicPage from './components/pages/MusicPage';
import CrewPage from './components/pages/CrewPage';
import OperationsPage from './components/pages/OperationsPage';
import LordTimmy from './components/pages/LordTimmy';
// Auth
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';

// State imports
import AuthState from './context/auth/authState';

// Styles
import './styles/App.scss';

function App() {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  return (
    <div>
      {/* <AuthState> */}
      <Router>
        <Fragment>
          <Navbar />
          {/* <FilmNavbar /> */}
          <Switch>
            {/* Primary Navbar Routes */}
            <Route exact path='/' component={Homepage} />
            <Route exact path='/about' component={AboutPage} />
            <Route exact path='/filmmakers' component={FilmmakersPage} />
            <Route exact path='/development' component={DevelopmentPage} />
            <Route exact path='/production' component={ProductionPage} />
            <Route exact path='/distribution' component={DistributionPage} />
            <Route exact path='/gallery' component={GalleryPage} />
            <Route exact path='/shop' component={ShopPage} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/signup' component={RegisterPage} />
            {/* Film Navbar Routes */}
            <Route exact path='/story' component={StoryPage} />
            <Route exact path='/casting' component={CastingPage} />
            <Route exact path='/locations' component={LocationsPage} />
            <Route exact path='/costumes' component={CostumesPage} />
            <Route exact path='/vfx' component={VfxPage} />
            <Route exact path='/props' component={PropsPage} />
            <Route exact path='/music' component={MusicPage} />
            <Route exact path='/crew' component={CrewPage} />
            <Route exact path='/operations' component={OperationsPage} />
            {/* */}
            <Route exact path='/lordTimmy' component={LordTimmy} />
          </Switch>
        </Fragment>
      </Router>
      {/* </AuthState> */}
    </div>
  );
}

export default App;
