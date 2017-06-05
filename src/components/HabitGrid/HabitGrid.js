import React from 'react';
import GridRow from './GridRow';
import './HabitGrid.css';

const HabitGrid = (props) => {
  return (
    <div className="grid-container">
      <GridRow rowId="0" startDate={props.startDate} />
      <GridRow rowId="1" startDate={props.startDate} />
      <GridRow rowId="2" startDate={props.startDate} />
      <GridRow rowId="3" startDate={props.startDate} />
      <GridRow rowId="4" startDate={props.startDate} />
      <GridRow rowId="5" startDate={props.startDate} />
      <GridRow rowId="6" startDate={props.startDate} />
    </div>
  )
}

export default HabitGrid;
