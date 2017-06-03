import React from 'react';
import GridRow from './GridRow';
import './HabitGrid.css';

const HabitGrid = (props) => {
  return (
    <div className="grid-container">
      <GridRow rowId="0" />
      <GridRow rowId="1" />
      <GridRow rowId="2" />
      <GridRow rowId="3" />
      <GridRow rowId="4" />
      <GridRow rowId="5" />
      <GridRow rowId="6" />
    </div>
  )
}

export default HabitGrid;
