import React from 'react';
import Grid from './Grid';

const GridRow = (props) => {
  return (
    <div className="grid-row">
      <Grid rowId={props.rowId} gridId="0" />
      <Grid rowId={props.rowId} gridId="1" />
      <Grid rowId={props.rowId} gridId="2" />
      <Grid rowId={props.rowId} gridId="3" />
      <Grid rowId={props.rowId} gridId="4" />
      <Grid rowId={props.rowId} gridId="5" />
      <Grid rowId={props.rowId} gridId="6" />
    </div>
  )
}

export default GridRow;
