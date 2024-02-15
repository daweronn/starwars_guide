import { useState, useEffect } from "react";
import PeopleCard from "../components/PeopleCard";
import axios from 'axios';

import "./PeopleCard.css";

const People = () => {
  const [allPeople, setAllPeople] = useState([]);

  useEffect (() => {
    axios.get('https://swapi.dev/api/people/').then((res) => setAllPeople(res.data.results)).catch((err) => console.log(err))

  }, [])

  return (
    <div className="container">
        <h2 className="title">All Characters: </h2>
        <div className="cards-containers">
            {allPeople.length === 0 && <p className="loading">Loading...</p>}
            {allPeople.length > 0 && allPeople.map((people) => <PeopleCard key={people.name} people={people}/>)}
        </div>
    </div>
  );
};

export default People;