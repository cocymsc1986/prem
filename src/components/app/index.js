import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from '../home';
import SearchResults from '../search-results';

export default () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/team/:team' component={SearchResults}/>
    <Route path='/player/:player' component={SearchResults}/>
  </Switch>
);
