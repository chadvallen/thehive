import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Locations from './components/Locations/Locations';

export default 
<Switch>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/menu' component={Menu} />
    <Route path='/locations' component={Locations} />
</Switch>