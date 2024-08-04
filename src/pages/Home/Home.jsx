import React from 'react'
import "./Home.css"
import Header from './components/Header';
import Cards from './components/Cards';
import HowItWorks from './components/HowItWorks';
import GetStarted from './components/GetStarted';

function Home() {
  return (
    <div className="home">
      
      <Header/>

      <Cards/>

      <HowItWorks/>

      <GetStarted/>

    </div>
  )
}

export default Home