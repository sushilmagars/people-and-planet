import React from 'react';
import './App.css';
import People from './components/People'

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (<div className="App">
      <People />
    </div>);
  }
}

export default App;
