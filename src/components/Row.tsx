import React from 'react';
import Cell from './Cell';

const Row = ({backgrounds, rowIndex}:{ backgrounds:string[], rowIndex:number}) => {
  const a = new Array(backgrounds.length).fill('');
  const RO = () => {
    const R = a.map((_, i) =><Cell key={`cell_${rowIndex}_${i}`} background={backgrounds[i]} />);
    return R;
}
  return <div className="row" key={`rowIndex_${rowIndex}`}>{RO()}</div>;
}

export default Row;
