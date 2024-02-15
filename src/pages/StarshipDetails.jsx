import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const StarshipDetails = ({}) => {
  const location = useLocation()
  const data = location.state

  const [starship, setStarship] = useState({});

  useEffect (() => {
    axios.get(data).then((res) => setStarship(res.data))
  }, [])
  return (
    <div className="detail-page">
    <h5 className="details">{starship.name}</h5>
    <div className="info">
      <h3>Model: {starship.model}</h3>
      <h3>Passengers: {starship.passengers} passengers</h3>
      <h3>Cargo capacity: {starship.cargo_capacity} kg</h3>
      <h3>Price for sell: {starship.cost_in_credits} credits</h3>
      <h3>Manufacturer: {starship.manufacturer} </h3>
    </div>
  </div>
  )
}

export default StarshipDetails