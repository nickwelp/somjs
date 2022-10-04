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
        <p>A Kohenen Self Organizing Feature Map is an algorithmic tool for grouping likes together in a two dimensional space.</p>
        <p>In this example the SOM will group 40 or so colors as identified by the swatches below.</p>
        <p>Special thanks to this C++ project from AI-Junkie:
    Kohonen's Self Organizing Feature Maps<br />
    Name:  SOMDemo (part one)<br />
    Desc:  Code to accompany part one of the SOM tutorial found at  <br />
           www.ai-junkie.com.<br />
           This demo creates a Kohonen Self Organizing Feature Map and <br />
           uses it to classify a varying amount of colors. <br />
           <br />
    Author:Mat Buckland 2002 (fup@ai-junkie.com)<br />
and the JAVA version of that project from <br />
 @author  alanter<br />
http://www.ai-junkie.com/ann/som/som1.html<br />
<br />
        </p>
      </header>
      <AppContext.Provider value={{latticeData, setLatticeData}}>
        <Lattice height={50} width={50} />
      </AppContext.Provider>
    </div>
  );
}

export default App;
