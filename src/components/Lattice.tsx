import React, { useState } from 'react';
import SOMLattice from '../classes/lattice';
// import AppContext from '../Context';
import Rows from './Rows';
import Key from './Key';
import SOMTrainer from '../classes/somTrainer';
import Vector from '../classes/vector';
import munselColors from '../trainingData/munselColors';


const Lattice = ({height=0, width=0}) => {
  const [latticeState, setLatticeState] = useState(new SOMLattice(width, height));
  const [toggleLoad, setToggleLoad] = useState(false);
  const hexTo01 = (hex:string) => {
      return parseInt(hex, 16)/0xFF;
  };
  const batteryOfColors:string[] = munselColors;

  const updateLatticeState = (a:SOMLattice) => {
    console.log('updating lattice state', a);
    setLatticeState(a);
  }
  // const trainerDataLength = 18;
  const trainerVectors:Vector[] = new Array(batteryOfColors.length);
  for(let i = 0; i<batteryOfColors.length; i ++){
    trainerVectors[i] = new Vector(3);
      trainerVectors[i][0] = hexTo01(`${batteryOfColors[i][0]}${batteryOfColors[i][1]}`);
      trainerVectors[i][1] = hexTo01(`${batteryOfColors[i][2]}${batteryOfColors[i][3]}`);
      trainerVectors[i][2] = hexTo01(`${batteryOfColors[i][4]}${batteryOfColors[i][5]}`);
  }

  const [somTrainer, replaceSOMTrainer] = useState(new SOMTrainer(
    latticeState,
    trainerVectors,
    setToggleLoad
  ));

  return (
    <div className='column'>
      <div className="latticeBody">
        <div onClick={()=> somTrainer.start()} className="controls">
          <p>RUN</p>
        </div>
        <Key trainerVectors={trainerVectors} />
        <Rows latticeState={latticeState} />
      </div>
      
    </div>
  );

}

export default Lattice;