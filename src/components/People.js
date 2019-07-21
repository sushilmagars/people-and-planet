import React, {Component} from 'react';
import PeopleList from './PeopleList';
import Planet from './Planet';
import Footer from './Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class People extends Component {
  constructor() {
    super();
  }

  render() {
    return (<React.Fragment>
      <Router>
        <Route path="/" exact component={PeopleList} />
        <Route path="/people" component={PeopleList} />
        <Route path="/planet/:planetId" component={Planet} />
      </Router>
      <Footer />
    </React.Fragment>);
  }
}

export default People;