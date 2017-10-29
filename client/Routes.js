import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Home';
import SearchResults from './SearchResults';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/team/:team' component={SearchResults}/>
    <Route path='/player/:player' component={SearchResults}/>
  </Switch>
);

export default Routes;
