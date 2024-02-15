import React, { useState, useEffect } from 'react'
import axios from 'axios';
import PlanetCard from '../components/PlanetCard';

import "./PeopleCard.css";

const Planets = () => {
  const [allPlanets, setAllPlanets] = useState([])

  useEffect(() => {
    axios.get('https://swapi.dev/api/planets/').then((res) => setAllPlanets(res.data.results)).catch((err) => console.log(err))

  },[])

  return (
    <div className="container">
        <h2 className="title">All Planets: </h2>
        <div className="cards-containers">
            {allPlanets.length === 0 && <p className="loading">Loading...</p>}
            {allPlanets.length > 0 && allPlanets.map((planets) => <PlanetCard key={planets.name} planets={planets} />)}
        </div>
    </div>
  )
}

export default Planets