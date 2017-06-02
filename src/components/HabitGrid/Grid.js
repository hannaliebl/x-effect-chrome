import React from 'react';

const Grid = (props) => {
  return (
    <div className="grid-box">
      {(props.completed) && '✖' }
    </div>
  )
}

export default Grid;
