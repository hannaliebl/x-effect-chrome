import React from 'react';
import Grid from './Grid';

const GridRow = (props) => {
  return (
    <div className="grid-row">
      <Grid completed={props.row[0]}/>
      <Grid completed={props.row[1]}/>
      <Grid completed={props.row[2]}/>
      <Grid completed={props.row[3]}/>
      <Grid completed={props.row[4]}/>
      <Grid completed={props.row[5]}/>
      <Grid completed={props.row[6]}/>
    </div>
  )
}

export default GridRow;
