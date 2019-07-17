import React from 'react';
import {getPlanetInformationUrl as baseUrl} from './../shared/constants';
import {useState, useEffect} from 'react';

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

  return (<div>
    <div>Name: {planet.name}</div>
    <div>Rotation period: {planet.rotation_period}</div>
    <div>Orbital Period: {planet.orbital_period}</div>
    <div>Diameter: {planet.diameter}</div>
    <div>Climate: {planet.climate}</div>
    <div>Gravity: {planet.gravity}</div>
    <div>Terrain: {planet.terrain}</div>
    <div>Surface Water: {planet.surface_water}</div>
    <div>Population: {planet.population}</div>
  </div>);
}

export default Planet;