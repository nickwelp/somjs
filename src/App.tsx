import React, { useState } from 'react';
import './App.css';
import AppContext from './Context';
import Lattice from './components/Lattice';
import munselColors from './trainingData/munselColors';

function App() {

  const [latticeData, setLatticeData] = useState();
  const [batteryOfColors, updateBatterOfColors] = useState(munselColors);
  return (
    <div className="App">
      <header className="App-header">
        <h1>SOM JS</h1>
        <p>A Kohenen Self Organizing Feature Map is an algorithmic tool for grouping likes together in a two dimensional space.</p>
        <p>In this example the SOM will group 40 or so colors as identified by the swatches below.</p>
        <blockquote><p>Special thanks to this C++ project from AI-Junkie:
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
      http://www.ai-junkie.com/ann/som/som1.html<br />  </p>
</blockquote>

      </header>
      <AppContext.Provider value={{latticeData, setLatticeData}}>
        <p>You can change the swatched by inputing Hexcodes of color below</p>
        <textarea id="batteryOfColors">
          {batteryOfColors}
        </textarea>
        <button onClick={()=> {
          const t = document.getElementById('batteryOfColors');
          if(t) {
            // @ts-expect-error
            const colors = t.value.trim();
            updateBatterOfColors(colors);
          }
        }}>Update Colors</button>
        <Lattice height={50} width={50} batteryOfColors={batteryOfColors} />
      </AppContext.Provider>
    </div>
  );
}

export default App;
