import React, {Component} from 'react';
import PeopleList from './PeopleList';
import Planet from './Planet';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class People extends Component {
  constructor() {
    super();
  }

  render() {
    return (<Router>
        <Route path="/" exact component={PeopleList} />
        <Route path="/people" component={PeopleList} />
        <Route path="/planet/:planetId" component={Planet} />
      </Router>);
  }
}

export default People;