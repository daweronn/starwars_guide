import {useState, useEffect} from 'react'
import axios from 'axios'
import { useLocation, Link } from 'react-router-dom'

import "./Details.css";
import GetNameStarships from './GetNameStarships';

const PeopleDetails = ({}) => {

  const location = useLocation()
  const data = location.state

  const [person, setPerson] = useState({});

  useEffect (() => {
    axios.get(data).then((res) => setPerson(res.data))
  }, [])

  const [homeworld, setHomeworld] = useState({});
  useEffect (() => {
    axios.get(person.homeworld).then((res) => setHomeworld(res.data))
  })

  return (
    <div className="detail-page">
      <h5 className="details">{person.name}</h5>
      <div className="info">
        <h3>Height: {person.height} cm</h3>
        <h3>Mass: {person.mass} kg</h3>
        <h3>Hair Color: {person.hair_color}</h3>
        <h3>Eye Color: {person.eye_color}</h3>
        <h3>Birth year: {person.birth_year}</h3>
        <h3>Gender: {person.gender}</h3>
        <h3>Homeworld: <Link to={`/planet/details`} state={person.homeworld}>{homeworld.name}</Link></h3>
        <h3>Starships: </h3>
        {person.starships?.map((url_atual, i) => (
          <div key={i}>
            <h3><GetNameStarships starshipsUrl={url_atual}/></h3>
          </div>
        ))}

      </div>
    </div>
  )
}

export default PeopleDetails