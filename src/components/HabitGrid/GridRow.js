import React from "react";
import PropTypes from "prop-types";
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

GridRow.propTypes = {
  dateFormat: PropTypes.string.isRequired,
  rowId: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired
};

export default GridRow;
