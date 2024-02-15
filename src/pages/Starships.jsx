import React, { useState, useEffect } from 'react'
import axios from 'axios';
import StarshipCard from '../components/StarshipCard.jsx';

import "./PeopleCard.css";

const Starships = () => {
  const [allStarships, setAllStarships] = useState([])

  useEffect(() => {
    axios.get('https://swapi.dev/api/starships/').then((res) => setAllStarships(res.data.results)).catch((err) => console.log(err))

  },[])

  return (
    <div className="container">
        <h2 className="title">All Starships: </h2>
        <div className="cards-containers">
            {allStarships.length === 0 && <p className="loading">Loading...</p>}
            {allStarships.length > 0 && allStarships.map((starships) => <StarshipCard key={starships.name} starships={starships} />)}
        </div>
    </div>
  )
}

export default Starships