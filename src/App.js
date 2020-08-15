import React from 'react';
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom';
import Home from './app/views/Home';
import Paw from './app/views/Paw';
import Apadrina from './app/views/Apadrina';
import Adoption from './app/views/Adoption';
import Subscribe from './app/views/Subscribe';
import Contact from './app/views/Contact';


function App() {
  return (
    
      <BrowserRouter>
        <Redirect from="/" to="/home" />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/paw" component={Paw} />
            <Route exact path="/apadrina" component={Apadrina} />
            <Route exact path="/adoption" component={Adoption} />
            <Route exact path="/subscribe" component={Subscribe} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
      </BrowserRouter>
    
  );
}

export default App;
