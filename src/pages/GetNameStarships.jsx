import {useState, useEffect} from 'react'
import axios from 'axios'
import { useLocation, Link } from 'react-router-dom'

const GetNameStarships = ({starshipsUrl, showLink=true}) => {
  
  const [starship, setStarship] = useState({});
    useEffect (() => {
    axios.get(starshipsUrl).then((res) => setStarship(res.data))
  }, [])

  return (
    <div>
        <Link to={`/starships/details`} state={starship.url}>{starship.name}</Link>
    </div>
  )
}

export default GetNameStarships