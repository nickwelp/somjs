import React, { useState } from 'react';
import './App.css';
import AppContext from './Context';
import Lattice from './components/Lattice';

function App() {

  const [latticeData, setLatticeData] = useState();
  return (
    <div className="App">
      <header className="App-header">
        <h1>SOM JS</h1>
      </header>
      <AppContext.Provider value={{latticeData, setLatticeData}}>
        <Lattice height={40} width={40} />
      </AppContext.Provider>
    </div>
  );
}

export default App;
