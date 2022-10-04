import React, { useState } from 'react';
import SOMLattice from '../classes/lattice';
// import AppContext from '../Context';
import Rows from './Rows';
import Key from './Key';
import SOMTrainer from '../classes/somTrainer';
import Vector from '../classes/vector';

let somTrainer:any;

const Lattice = ({height=0, width=0, batteryOfColors}:{batteryOfColors:string, width: number, height: number}) => {
  const [latticeState, updateLatticeState] = useState(new SOMLattice(width, height));
  const [toggleLoad, setToggleLoad] = useState(false);
  const hexTo01 = (hex:string) => {
      return parseInt(hex, 16)/0xFF;
  };
  // const batteryOfColors:string[] = munselColors;
  // const trainerDataLength = 18;
  const batColors = batteryOfColors.split('\n');
  let trainerVectors:Vector[] = new Array(batColors.length);
  for(let i = 0; i<batColors.length; i++){
    trainerVectors[i] = new Vector(3);
      trainerVectors[i][0] = hexTo01(`${batColors[i][0]}${batColors[i][1]}`);
      trainerVectors[i][1] = hexTo01(`${batColors[i][2]}${batColors[i][3]}`);
      trainerVectors[i][2] = hexTo01(`${batColors[i][4]}${batColors[i][5]}`);
  }


  somTrainer = new SOMTrainer(
    latticeState,
    trainerVectors,
    setToggleLoad
  );

  return (
    <div className='column'>
      <div className="latticeBody">
        <div onClick={()=> {
            console.log(trainerVectors);
            somTrainer = new SOMTrainer(
              latticeState,
              trainerVectors,
              setToggleLoad
            );
            // @ts-expect-err or
            setTimeout(() => somTrainer.start(), 0);;
          }} className="controls">
          <p>RUN</p>
        </div>
        <Key trainerVectors={trainerVectors} />
        <Rows latticeState={latticeState} />
      </div>
      
    </div>
  );

}

export default Lattice;