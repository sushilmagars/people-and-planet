import React from 'react';
import {getPlanetInformationUrl as baseUrl} from './../shared/constants';
import {useState, useEffect} from 'react';
import Header from './Header';

function Planet({match}) {
  const planetId = match.params.planetId;

  const [planet, setPlanet] = useState([]);

  const getPlanetInformation = async (planetId) => {
    const planetInformation = await fetch(`${baseUrl}/${planetId}`);
    const planet = await planetInformation.json();
    setPlanet(planet);
  };

  useEffect(() => {
    getPlanetInformation(planetId);
  }, []);

  return (<React.Fragment>
    <Header 
        componentClassName="people-header"
        headerLabel="Planet"
        displayEnableOfflineOption={false}
    />
    <div className="planet-information">
        <div className="row">
          <div className="planet-attribute">Name</div>
          <div className="planet-attribute-detail">
            <div className="planet-attribute-wrapper">
              <label>{planet.name}</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="planet-attribute">Rotation period</div>
          <div className="planet-attribute-detail">
            <div className="planet-attribute-wrapper">
              <label>{planet.rotation_period}</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="planet-attribute">Orbital Period</div>
          <div className="planet-attribute-detail">
            <div className="planet-attribute-wrapper">
              <label>{planet.orbital_period}</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="planet-attribute">Diameter</div>
          <div className="planet-attribute-detail">
            <div className="planet-attribute-wrapper">
              <label>{planet.diameter}</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="planet-attribute">Climate</div>
          <div className="planet-attribute-detail">
            <div className="planet-attribute-wrapper">  
              <label>{planet.climate}</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="planet-attribute">Gravity</div>
          <div className="planet-attribute-detail">
            <div className="planet-attribute-wrapper">
              <label>{planet.gravity}</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="planet-attribute">Terrain</div>
          <div className="planet-attribute-detail">
            <div className="planet-attribute-wrapper">
              <label>{planet.terrain}</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="planet-attribute">Surface Water</div>
          <div className="planet-attribute-detail">
            <div className="planet-attribute-wrapper">
              <label>{planet.surface_water}</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="planet-attribute">Population</div>
          <div className="planet-attribute-detail">
            <div className="planet-attribute-wrapper">
              <label>{planet.population}</label>
            </div>
          </div>
        </div>
    </div>
    {/* <div className="planets">
      <div>Name: {planet.name}</div>
      <div>Rotation period: {planet.rotation_period}</div>
      <div>Orbital Period: {planet.orbital_period}</div>
      <div>Diameter: {planet.diameter}</div>
      <div>Climate: {planet.climate}</div>
      <div>Gravity: {planet.gravity}</div>
      <div>Terrain: {planet.terrain}</div>
      <div>Surface Water: {planet.surface_water}</div>
      <div>Population: {planet.population}</div>
    </div> */}
  </React.Fragment>);
}

export default Planet;