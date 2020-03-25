import React, { useState, useEffect } from 'react';

export default function BeerList({pageNumber}) {
    const [beersData, setBeersData] = useState([]);

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?page=${pageNumber}`)
    .then(response => response.json())
    .then(setBeersData);
  }, [pageNumber]);

  return (
    <ul>
      {beersData.map(beer => <li key={beer.id}>{beer.name}</li>)}
    </ul>
  );
}