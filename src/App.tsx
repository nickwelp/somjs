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
        <p><pre>{`Special thanks to this C++ project from AI-Junkie:
            //  Name:  SOMDemo (part one)
            //
            //  Desc:  Code to accompany part one of the SOM tutorial found at  
            //         www.ai-junkie.com.
            //         This demo creates a Kohonen Self Organizing Feature Map and 
            //         uses it to classify a varying amount of colors. 
            //         
            //  Author:Mat Buckland 2002 (fup@ai-junkie.com)
and the JAVA version of that project from 
          // @author  alanter
http://www.ai-junkie.com/ann/som/som1.html          
          `}

          </pre>
        </p>
        <p>Scroll down and click "RUN" to start training.</p>
      </header>
      <AppContext.Provider value={{latticeData, setLatticeData}}>
        <Lattice height={40} width={40} />
      </AppContext.Provider>
    </div>
  );
}

export default App;
