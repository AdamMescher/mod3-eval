import React from 'react';

const HouseCard = ({houseData}) => {
  
  

  const swornMembers = houseData.swornMembers.map( personURL => {
    return fetch(`http://localhost:3001/api/v1/character`, 
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify( {url: personURL} )
    } )
    .then( response => response.json() )
    .then( parsed =>  )
  })

  return (
    <article className="house-card-container" onClick={() => console.log('clicked card')}>
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