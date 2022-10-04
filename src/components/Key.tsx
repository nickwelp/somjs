import React from "react";
import Vector from "../classes/vector";

const Key = ({trainerVectors}:{trainerVectors:Vector[]}) => {
  const swatches = (trainerVectors:Vector[]) => trainerVectors.map(([r,g,b]) => {
    return (<div key={`${r},${g},${b}`} className="swatch" style={{backgroundColor:`rgb(${r*255},${g*255},${b*255})`}} />);
  });

  return (<div className="row-wrap">
    {swatches(trainerVectors)}
  </div>);

};

export default Key;