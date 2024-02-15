import { Link } from "react-router-dom";

const StarshipCard = ({starships, showLink = true}) => {
  return (
    <div className="people-card">
        <h2>{starships.name}</h2>
        <p>Passengers: </p>{starships.passengers}
        <p>Cargo capacity: </p>{starships.cargo_capacity}
        {showLink && <Link to={`/starships/details`} state={starships.url}>More details</Link>}
    </div>
  )
} 

export default StarshipCard