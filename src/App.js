import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="container">
        <div className="row">
           <div className="col-md-12">
                <h1>fakestagram</h1>
           </div>
        </div>

        <div className="row">
            <div className="col-md-12">
                 <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>

        <Switch>

            <Route path="/about">
                <AboutPage/>
            </Route>

            <Route path="/contact">
                <ContactPage/>
            </Route>

            <Route path="/">
                <HomePage/>
            </Route>

        </Switch>
    </div>
  );
}

export default App;
