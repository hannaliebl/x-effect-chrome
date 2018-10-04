import React from "react";
import PropTypes from "prop-types";
import HabitGrid from "./HabitGrid/HabitGrid";
import HabitTitle from "./HabitGrid/HabitTitle";
import HabitNotesList from "./HabitNotes/HabitNotesList";
import FormError from "./Forms/FormError";
import AddNotes from "./HabitNotes/AddNotes";

const HabitGridContainer = props => {
  return (
    <div>
      <HabitTitle title={props.habitTitle} />
      <HabitGrid startDate={props.startDate} dateFormat={props.dateFormat} />
      <HabitNotesList
        handleNoteDelete={props.handleNoteDelete}
        notes={props.notes}
      />
      <AddNotes noteInputTitle="" />
      <div className="delete-grid-container">
        <div
          className="delete-grid-icon"
          tabIndex="0"
          onClick={props.handleHabitDeleteInBuilder}
          onKeyDown={props.handleHabitDeleteInBuilder}
        >
          x
        </div>
        <div className="delete-grid-text">Delete habit grid and start over</div>
      </div>
    </div>
  );
};

HabitGridContainer.propTypes = {
  habitTitle: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  dateFormat: PropTypes.string.isRequired,
  handleNoteDelete: PropTypes.func.isRequired,
  notes: PropTypes.array.isRequired,
  handleHabitDeleteInBuilder: PropTypes.func.isRequired
};

export default HabitGridContainer;
