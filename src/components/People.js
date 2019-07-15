import React, {Component} from 'react';
import PeopleList from './PeopleList';

class People extends Component {
  constructor() {
    super();
  }

  render() {
    return (<>
      <div className="people-header">
        <label><h2>People</h2></label>
        <button className="enable-offline">Enable Offline</button>
      </div>
      <PeopleList />
      </>);
  }
}

export default People;