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
  const trainerDataLength = 8;
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
  console.log(trainerVectors);
 
  const [somTrainer, replaceSOMTrainer] = useState(new SOMTrainer(
    latticeState,
    trainerVectors,
    updateLatticeState,
    setToggleLoad
  ));

  return (
    <div className='column'>
      <div className="latticeBody">
        <Rows latticeState={latticeState} />
      </div>
      <div className="controls">
        <p onClick={()=> somTrainer.start()}>RUN</p>
        {toggleLoad && <p onClick={()=>setToggleLoad(!toggleLoad)}>Toggle Load</p>}
        {!toggleLoad && <p onClick={()=>setToggleLoad(!toggleLoad)}>Toggle Load</p>}
      </div>
    </div>
  );

}

export default Lattice;