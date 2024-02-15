import { Link } from "react-router-dom";

const PlanetCard = ({planets, showLink = true}) => {
  return (
    <div className="people-card">
        <h2>{planets.name}</h2>
        <p>Climate: </p>{planets.climate}
        <p>Terrain: </p>{planets.terrain}
        {showLink && <Link to={`/planet/details`} state={planets.url}>More details</Link>}
    </div>
  )
} 

export default PlanetCard