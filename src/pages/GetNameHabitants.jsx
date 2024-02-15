import {useState, useEffect} from 'react'
import axios from 'axios'
import { useLocation, Link } from 'react-router-dom'

const GetNameHabitants = ({habitants, showLink=true}) => {
  
  const [habitant, setHabitant] = useState({});
    useEffect (() => {
    axios.get(habitants).then((res) => setHabitant(res.data))
  }, [])

  return (
    <div>
        <Link to={`/people/details`} state={habitant.url}>{habitant.name}</Link>
    </div>
  )
}

export default GetNameHabitants