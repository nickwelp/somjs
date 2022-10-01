import React from "react";
import SOMLattice from "../classes/lattice";
import Row from "./Row";

const Rows = ({latticeState}:{latticeState:SOMLattice}) => {
  return (<div>
    {latticeState.matrix.map((row, i) => {
      const backgrounds = row.map((w) => { 
        const weights = w.getVector();
        return `rgb(${Math.round(weights[0] * 255)}, ${Math.round(weights[1] * 255)}, ${(weights[2] * 255)})`;
      });

      return (
        <div key={`row_${i}`}>
          <Row backgrounds={backgrounds} rowIndex={i} />
        </div>);
    })}
  </div>);
}

export default Rows;