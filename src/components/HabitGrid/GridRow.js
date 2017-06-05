import React from 'react';
import Grid from './Grid';

const GridRow = (props) => {
  return (
    <div className="grid-row">
      <Grid rowId={props.rowId} startDate={props.startDate} gridId="0" />
      <Grid rowId={props.rowId} startDate={props.startDate} gridId="1" />
      <Grid rowId={props.rowId} startDate={props.startDate} gridId="2" />
      <Grid rowId={props.rowId} startDate={props.startDate} gridId="3" />
      <Grid rowId={props.rowId} startDate={props.startDate} gridId="4" />
      <Grid rowId={props.rowId} startDate={props.startDate} gridId="5" />
      <Grid rowId={props.rowId} startDate={props.startDate} gridId="6" />
    </div>
  )
}

export default GridRow;
