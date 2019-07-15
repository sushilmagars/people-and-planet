import React, {Component} from 'react';

class People extends Component {
  constructor() {
    super();
  }

  render() {
    return (<div className="people-header">
      <label><h2>People</h2></label>
      <button className="enable-offline">Enable Offline</button>
      </div>);
  }
}

export default People;