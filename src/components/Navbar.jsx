import React from 'react'
import { Link } from "react-router-dom"
import { BsFilePerson } from "react-icons/bs";
import { GiPlanetCore } from "react-icons/gi";
import { BsRocketTakeoffFill } from "react-icons/bs";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav id="navbar">
        <h2>
            <Link to="/">Starwars</Link>
        </h2>
          <h3><Link to="/people">Characters<BsFilePerson/></Link></h3>
          <h3><Link to="/planets">Planets<GiPlanetCore /></Link></h3>
          <h3><Link to="/starships">Starships<BsRocketTakeoffFill /></Link></h3>
    </nav>
  )
}

export default Navbar