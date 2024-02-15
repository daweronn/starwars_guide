import { Link, useParams } from "react-router-dom";

const PeopleCard = ({ people, showLink=true }) => {

  return (
    <div className="people-card" key={people.name}>
        <h2>{people.name}</h2>
        <p>Gender: </p>{people.gender}
        <p>Height: </p>{people.height}
        {showLink && <Link to={`/people/details`} state={people.url}>
          More details
          </Link>}
    </div>
  )
}

export default PeopleCard