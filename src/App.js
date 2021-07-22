import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavLinkItem from './components/NavLinkItem';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ImageDetailPage from './pages/ImageDetailPage';
import ImageListPage from './pages/ImageListPage';

function App() {
  return (
    <div className="container">
        <div className="row">
           <div className="col-md-4">
                <h1>fakestagram</h1>
           </div>
            <div className="col-md-8">
                 <ul className="nav justify-content-end">
                    <NavLinkItem to="/" text="Home" />
                    <NavLinkItem to="/fakestagram" text="Fakestagram" />
                    <NavLinkItem to="/about" text="About" />
                    <NavLinkItem to="/contact" text="Contact" />
                </ul>
            </div>
        </div>

        <Switch>

            <Route path="/fakestagram/:id" component={ImageDetailPage}/>

            <Route path="/fakestagram">
                <ImageListPage/>
            </Route>

            <Route path="/about">
                <AboutPage/>
            </Route>

            <Route path="/contact">
                <ContactPage/>
            </Route>

            <Route path="/">
                Welcome! 
            </Route>

        </Switch>
    </div>
  );
}

export default App;
