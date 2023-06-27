import { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Card from '../components/Card'
import Data from '../components/Data'
import './App.css'

function App() {
  const cardElements = Data.map(cardData => {
    return (
      <Card
        img={cardData.coverImg}
        rating={cardData.stats.rating}
        reviewCount={cardData.stats.reviewCount}
        location={cardData.location}
        title={cardData.title}
        price={cardData.price}
      />
    )
  })

    return (
    <>
      <Navbar />
      <Hero />
      {cardElements}
    </>
  )
}

export default App

