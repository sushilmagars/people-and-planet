import React from 'react';
import PeopleList from './PeopleList';
import Planet from './Planet';
import Footer from './Footer';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function People() {
  return (<React.Fragment>
    <Router>
      <Route path="/" exact component={PeopleList} />
      <Route path="/people" component={PeopleList} />
      <Route path="/planet/:planetId" component={Planet} />
    </Router>
    <Footer />
  </React.Fragment>);
}

export default People;