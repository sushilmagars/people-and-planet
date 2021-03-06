import React from 'react';
import PeopleInformation from './PeopleInformation';
import Header from './Header';
import {baseUrl} from './../shared/constants';

class PeopleList extends React.Component {
  constructor() {
    super();
    this.state = {
      displayFilteredList: false,
      list: [],
      filteredList: [],
      selectedPerson: []
    }
    
    this.searchList = this.searchList.bind(this);
    this.renderPeopleList = this.renderPeopleList.bind(this);
    this.selectPerson = this.selectPerson.bind(this);
  }

  searchList(e) {
    let filteredList = this.state.list
      .filter(({name}) => name.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0);

    if (filteredList.length >= 1) {
      return this.setState({displayFilteredList: true, filteredList});
    }
  }

  async componentDidMount() {
    const getPeopleList = await fetch(`${baseUrl}/people/`);
    const people = await getPeopleList.json();
    this.setState({list: people.results});
  }

  selectPerson(indexOfSelectedPerson) {
    let person;

    if (this.state.displayFilteredList) {
      person = this.state.filteredList[indexOfSelectedPerson];
    } else {
      person = this.state.list[indexOfSelectedPerson];
    }

    this.setState({selectedPerson: [person]});
  }

  renderPeopleList(list) {
    return list.map((person, idx) => <li 
      key={idx}
      onClick={() => this.selectPerson(idx)}
      >{person.name}</li>)
  } 

  render() {
    const personSelected = this.state.selectedPerson[0];

    return (<React.Fragment>
      <Header 
        componentClassName="people-header"
        headerLabel="People"
        displayEnableOfflineOption={true}
      />
      <div className="people-container">
        <div className="sidebar">
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Person name e.g. Sam"
              onChange={this.searchList}
            />
          </div>
          <ul className="people-list-item">
            {this.state.displayFilteredList ? 
              this.renderPeopleList(this.state.filteredList) :
              this.renderPeopleList(this.state.list)
            }
          </ul>
        </div>
        {this.state.selectedPerson.length ? 
          <PeopleInformation 
            personName={personSelected.name}
            personBirthYear={personSelected.birth_year}
            personGender={personSelected.gender}
            personHeight={personSelected.height}
            personMass={personSelected.mass}
            planetHomeworld={personSelected.homeworld}
          /> : null}
      </div>
    </React.Fragment>)
  }
}

export default PeopleList;