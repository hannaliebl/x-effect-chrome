import React from "react";
import Grid from "./Grid";

const GridRow = props => {
  return (
    <div className="grid-row">
      <Grid
        rowId={props.rowId}
        startDate={props.startDate}
        gridId="0"
        dateFormat={props.dateFormat}
      />
      <Grid
        rowId={props.rowId}
        startDate={props.startDate}
        gridId="1"
        dateFormat={props.dateFormat}
      />
      <Grid
        rowId={props.rowId}
        startDate={props.startDate}
        gridId="2"
        dateFormat={props.dateFormat}
      />
      <Grid
        rowId={props.rowId}
        startDate={props.startDate}
        gridId="3"
        dateFormat={props.dateFormat}
      />
      <Grid
        rowId={props.rowId}
        startDate={props.startDate}
        gridId="4"
        dateFormat={props.dateFormat}
      />
      <Grid
        rowId={props.rowId}
        startDate={props.startDate}
        gridId="5"
        dateFormat={props.dateFormat}
      />
      <Grid
        rowId={props.rowId}
        startDate={props.startDate}
        gridId="6"
        dateFormat={props.dateFormat}
      />
    </div>
  );
};

export default GridRow;
