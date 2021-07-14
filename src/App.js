import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="container">
        <div className="row">
           <div className="col-md-12">
                <h1>fakestagram</h1>
           </div>
        </div>

        <Switch>
            <Route path="/about">
                <h2>This is the fakestagram, full of time-consuming entertainment!</h2>
            </Route>
            <Route path="/contact">
                <h2>Contact info here</h2>
            </Route>
            <Route path="/">
                <h2>Home</h2>
            </Route>
        </Switch>
    </div>
  );
}

export default App;
