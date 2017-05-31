import React from 'react';
import GridRow from './GridRow';
import './HabitGrid.css';

const HabitGrid = (props) => {
  return (
    <div className="grid-container">
      <GridRow />
      <GridRow />
      <GridRow />
      <GridRow />
      <GridRow />
      <GridRow />
      <GridRow />
    </div>
  )
}

export default HabitGrid;
