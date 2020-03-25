import React, { useState, useEffect } from 'react';

export default function BeerList() {
    const [beersData, setBeersData] = useState([]);

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
    .then(response => response.json())
    .then(setBeersData);
  }, []);

  return (
    <ul>
      {beersData.map(beer => <li key={beer.id}>{beer.name}</li>)}
    </ul>
  );
}