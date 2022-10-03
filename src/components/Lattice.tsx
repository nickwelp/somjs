import React, { useState } from 'react';
import SOMLattice from '../classes/lattice';
// import AppContext from '../Context';
import Rows from './Rows';
import SOMTrainer from '../classes/somTrainer';
import Vector from '../classes/vector';



const Lattice = ({height=0, width=0}) => {
  // @ts-expe ct-error
  // const manager:SOMLattice = ;
  // const { latticeData, setLatticeData } = useContext(AppContext);
  // @ts-expect-er ror
  const [latticeState, setLatticeState] = useState(new SOMLattice(width, height));
  const [toggleLoad, setToggleLoad] = useState(false);
  const updateLatticeState = (a:SOMLattice) => {
    console.log('updating lattice state', a);
    setLatticeState(a);
  }
  const trainerDataLength = 18;
  const trainerVectors = new Array(trainerDataLength);
  for(let i = 0; i<trainerDataLength; i ++){
    trainerVectors[i] = new Vector(3);
  }
  // red
  trainerVectors[0][0] = 1;
  trainerVectors[0][1] = 0;
  trainerVectors[0][2] = 0;
  // yellow
  trainerVectors[1][0] = 1;
  trainerVectors[1][1] = 1;
  trainerVectors[1][2] = 0;
  // cyan
  trainerVectors[2][0] = 0;
  trainerVectors[2][1] = 1;
  trainerVectors[2][2] = 1;
  // blue
  trainerVectors[3][0] = 0;
  trainerVectors[3][1] = 0;
  trainerVectors[3][2] = 1;
  // violet
  trainerVectors[4][0] = 1;
  trainerVectors[4][1] = 0;
  trainerVectors[4][2] = 1;
  // white
  trainerVectors[5][0] = 1;
  trainerVectors[5][1] = 1;
  trainerVectors[5][2] = 1;
  // black
  trainerVectors[6][0] = 0;
  trainerVectors[6][1] = 0;
  trainerVectors[6][2] = 0;

  trainerVectors[7][0] = 0.5;
  trainerVectors[7][1] = 0.5;
  trainerVectors[7][2] = 0.5;
  // green
  trainerVectors[8][0] = 0;
  trainerVectors[8][1] = 1;
  trainerVectors[8][2] = 0;
  // console.log(trainerVectors);
   // dark red
   trainerVectors[9][0] = 0.5;
   trainerVectors[9][1] = 0;
   trainerVectors[9][2] = 0;
   // light red
   trainerVectors[10][0] = 1;
   trainerVectors[10][1] = 0.5;
   trainerVectors[10][2] = 0.5;
 // dark yellow
  trainerVectors[11][0] = 0.5;
  trainerVectors[11][1] = 0.5;
  trainerVectors[11][2] = 0;
  // light yellow
  trainerVectors[12][0] = 1;
  trainerVectors[12][1] = 1;
  trainerVectors[12][2] = 0.5;
    // light yellow
    trainerVectors[13][0] = 1;
    trainerVectors[13][1] = 1;
    trainerVectors[13][2] = 0.5;
    // light green
    trainerVectors[13][0] = 0.5;
    trainerVectors[13][1] = 1;
    trainerVectors[13][2] = 0.5;
    // dark green
    trainerVectors[14][0] = 0;
    trainerVectors[14][1] = 0.5;
    trainerVectors[14][2] = 0;
   // dark violet
   trainerVectors[15][0] = 0.5;
   trainerVectors[15][1] = 0;
   trainerVectors[15][2] = 0.5;
   // dark blue
   trainerVectors[16][0] = 0;
   trainerVectors[16][1] = 0;
   trainerVectors[16][2] = 0.5;
   // light blue
   trainerVectors[17][0] = 0.5;
   trainerVectors[17][1] = 0.5;
   trainerVectors[17][2] = 1;



  const [somTrainer, replaceSOMTrainer] = useState(new SOMTrainer(
    latticeState,
    trainerVectors,
    setToggleLoad
  ));

  return (
    <div className='column'>
      <div className="latticeBody">
        <Rows latticeState={latticeState} />
      </div>
      <div className="controls">
        <p onClick={()=> somTrainer.start()}>RUN</p>
      </div>
    </div>
  );

}

export default Lattice;