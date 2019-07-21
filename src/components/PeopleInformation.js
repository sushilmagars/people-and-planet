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
    <div className="row">
      <div className="people-attribute">Name</div>
      <div className="people-attribute-detail">{personName}</div>
    </div>
    <div className="row">
      <div className="people-attribute">Year of Birth</div>
      <div className="people-attribute-detail">{personBirthYear}</div>
    </div>
    <div className="row">
      <div className="people-attribute">Gender</div>
      <div className="people-attribute-detail">{personGender}</div>
    </div>
    <div className="row">
      <div className="people-attribute">Height</div>
      <div className="people-attribute-detail">{personHeight}</div>
    </div>
    <div className="row">
      <div className="people-attribute">Mass</div>
      <div className="people-attribute-detail">{personMass}</div>
    </div>
    <div className="row home-planet">
      <Link to={`/planet/${planetId}`}>
        <label className="planet-address">Home Planet</label>
      </Link>
      </div>
  </div>);
}

export default PeopleInformation;