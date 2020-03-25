import React, { useState } from 'react';
import './App.css';

import BeerList from './components/BeerList';

function App() {
  const [page, setPage] = useState(1)

  const increaseCounter = () => setPage(page + 1);
  const descreaseCounter = () => setPage(page - 1);

  return (
    <div className="App">
      <BeerList pageNumber={page}/>

      <button type="button" onClick={increaseCounter}>
        Increment
      </button>
      <button type="button" onClick={descreaseCounter}>
        Decrement
      </button>
    </div>
  );
}

export default App;
