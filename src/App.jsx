import React from 'react'
import './styles.css'
import housesForSale from './data/housesForSale'
import HouseCard from './components/HouseCard'

export default function App() {
  const houseCards = housesForSale.map((houseData, index) => (
    <HouseCard
      key={houseData.id}
      houseData={houseData}
      index={index}
      totalHouses={housesForSale.length}
    />
  ))

  return (
    <div className="wrapper">
      <header>
        <img className="logo" src="images/logo.png" alt="Logo" />
      </header>
      <div className="house-cards-container">{houseCards}</div>
    </div>
  )
}
