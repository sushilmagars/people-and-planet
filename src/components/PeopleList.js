import React from 'react';
import {getAllPeopleUrl as GETPEOPLELISTURL} from './../shared/constants';

class PeopleList extends React.Component {
  constructor() {
    super();
    this.state = {
      displayFilteredList: false,
      list: [],
      filteredList: []
    }
    
    this.searchList = this.searchList.bind(this);
    this.renderPeopleList = this.renderPeopleList.bind(this);
  }

  searchList(e) {
    let filteredList = this.state.list
      .filter(({name}) => name.toLowerCase().indexOf(e.target.value) >= 0);

    if (filteredList.length >= 1) {
      return this.setState({displayFilteredList: true, filteredList});
    }
  }

  async componentDidMount() {
    const getPeopleList = await fetch(GETPEOPLELISTURL);
    const people = await getPeopleList.json();
    this.setState({list: people.results});
  }

  renderPeopleList(list) {
    return list.map((person, idx) => <li key={idx}>{person.name}</li>)
  } 

  render() {
    return (<div className="sidebar">
      <input type="text" onChange={this.searchList}/>
      <ul>
        {this.state.displayFilteredList ? 
          this.renderPeopleList(this.state.filteredList) :
          this.renderPeopleList(this.state.list)
        }
      </ul>
    </div>)
  }
}

export default PeopleList;