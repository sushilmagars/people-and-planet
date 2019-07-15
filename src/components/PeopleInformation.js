import React, {Component} from 'react';
import {Link} from 'react-router-dom';

function PeopleInformation(props) {
  const {
    personName,
    personBirthYear,
    personGender,
    personHeight,
    personMass,
    planetHomeworld
  } = props;

  const getPlanetId = (planetAddress) => {
    const regExp = /[0-9]/gi;
    return planetAddress.match(regExp)[0];
  }

  const planetId = getPlanetId(planetHomeworld);

  return (<div className="people-information">
    <div className="information-row"><label>Name: {personName}</label></div>
    <div className="information-row"><label>Year of Birth: {personBirthYear}</label></div>
    <div className="information-row"><label>Gender: {personGender}</label></div>
    <div className="information-row"><label>Height: {personHeight}</label></div>
    <div className="information-row"><label>Mass: {personMass}</label></div>
    <Link to={`/planet/${planetId}`}>
      <label className="planet-address">Home Planet</label>
    </Link>
  </div>);
}

export default PeopleInformation;