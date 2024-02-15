import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route} from "react-router-dom"

import './index.css'

import Home from './pages/Home.jsx'
import People from './pages/People.jsx'
import PeopleDetails from './pages/PeopleDetails.jsx'
import PlanetDetails from './pages/PlanetDetails.jsx'
import StarshipDetails from './pages/StarshipDetails.jsx'
import Planets from './pages/Planets.jsx'
import Starships from './pages/Starships.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home/>}/> 
          <Route path="/people" element={<People/>}/>
          <Route path="people/details" element={<PeopleDetails/>}/>
          <Route path="/planets" element={<Planets/>}/>
          <Route path="planet/details" element={<PlanetDetails/>}/>
          <Route path="/starships" element={<Starships/>}/>
          <Route path="starships/details" element={<StarshipDetails/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
