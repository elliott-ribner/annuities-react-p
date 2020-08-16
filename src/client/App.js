import React from 'react';
import './app.css';
import 'foundation-sites/dist/css/foundation.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {
  TopBar, TopBarRight, TopBarTitle, Menu, MenuItem
} from 'react-foundation';
import Index from './pages';
import Quote from './pages/quote';
import Footer from './components/Footer';

function AppRouter() {
  return (
    <Router>
      <div>
        <TopBar>
          <TopBarTitle>Next-Annuity</TopBarTitle>
          <TopBarRight>
            <Menu>
              <Link to="/">
                <MenuItem>Home</MenuItem>
              </Link>
              <MenuItem>About</MenuItem>
              <MenuItem>Contact</MenuItem>
              <Link to="/quote">
                <MenuItem>Shop</MenuItem>
              </Link>
            </Menu>
          </TopBarRight>
        </TopBar>
        <Route path="/" exact component={Index} />
        <Route path="/quote" exact component={Quote} />
        <Footer />
      </div>
    </Router>
  );
}

export default AppRouter;
