import React from 'react';

const HouseCard = ({houseData, handleCardClick}) => {
  return (
    <article className="house-card-container" onClick={() => console.log('hi') }>
      <h3>{`House Name: ${houseData.name}`}</h3>
      <p>{`Founded: ${houseData.founded || 'N/A'} `}</p>
      <p className='house-card-list-title'>{`Seats: ${houseData.seats}`}</p>
      <p className='house-card-list-title'>{`Titles: ${houseData.titles}`}</p>
      <p>{`Coat of Arms: ${houseData.coatOfArms}`}</p>
      <p className='house-card-list-ancestral-weapons'>{`Ancestral Weapons: ${houseData.ancestralWeapons}`}</p>
      <p className='house-card-words'>{`Words: ${houseData.words || 'N/A'}`}</p>
      <p className='house-card-sworn-members'>{`Sworn Members: `}</p>
    </article>
  )
}

export default HouseCard;