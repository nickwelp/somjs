import React from 'react';

const Cell = ({background= ''}) => {
  return (<div className='cell' style={{backgroundColor: background}}></div>);
}

export default Cell;
