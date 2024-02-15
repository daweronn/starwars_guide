import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import "./Details.css";
import GetNameHabitants from './GetNameHabitants';

const PlanetDetails = ({}) => {
  const location = useLocation()
  const data = location.state

  const [planet, setPlanet] = useState({});

  useEffect (() => {
    axios.get(data).then((res) => setPlanet(res.data))
  }, [])
  return (
    <div className="detail-page">
      <h5 className="details">{planet.name}</h5>
      <div className="info">
        <h3>Climate: {planet.climate}</h3>
        <h3>Terrain: {planet.terrain}</h3>
        <h3>Population: {planet.population} habitants</h3>
        <h3>Gravity: {planet.gravity}</h3>
        <h3>Diameter: {planet.diameter} miles</h3>
        <h3>Residents: </h3>
        {planet.residents?.map((url_atual, i) => (
          <div key={i}>
            <h3><GetNameHabitants habitants={url_atual}/></h3>
          </div>
        ))}


      </div>
    </div>
  )
}

export default PlanetDetails