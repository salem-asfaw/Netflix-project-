import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import "./Data/Data.js"
import './App.css'
import Header from './Components/Header/Header'
// import { UNSAFE_shouldHydrateRouteLoader } from 'react-router-dom'
import Banner from './Components/Banner/Banner'
import DisplayerRow from './Components/DisplayRow/DisplayerRow'
// import MovieCard from './Components/MovieCard/MovieCard'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    
    <Header  />
    <Banner/>
    {/* <MovieCard/> */}
    <DisplayerRow/> 
    <Footer/>
    
    </>
  )
}

export default App  