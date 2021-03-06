import React from "react";
import PropTypes from "prop-types";
import GridRow from "./GridRow";
import "./HabitGrid.css";

const HabitGrid = props => {
  return (
    <div className="grid-container">
      <GridRow
        rowId="0"
        startDate={props.startDate}
        dateFormat={props.dateFormat}
      />
      <GridRow
        rowId="1"
        startDate={props.startDate}
        dateFormat={props.dateFormat}
      />
      <GridRow
        rowId="2"
        startDate={props.startDate}
        dateFormat={props.dateFormat}
      />
      <GridRow
        rowId="3"
        startDate={props.startDate}
        dateFormat={props.dateFormat}
      />
      <GridRow
        rowId="4"
        startDate={props.startDate}
        dateFormat={props.dateFormat}
      />
      <GridRow
        rowId="5"
        startDate={props.startDate}
        dateFormat={props.dateFormat}
      />
      <GridRow
        rowId="6"
        startDate={props.startDate}
        dateFormat={props.dateFormat}
      />
    </div>
  );
};

HabitGrid.propTypes = {
  dateFormat: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired
};

export default HabitGrid;
