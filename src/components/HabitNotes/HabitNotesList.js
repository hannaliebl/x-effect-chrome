import React from "react";
import PropTypes from "prop-types";
import HabitNote from "./HabitNote";
import "./HabitNotes.css";

const HabitNotesList = props => {
  return (
    <div className="notes-container">
      {props.notes.length > 0 && <div className="form-title">Notes:</div>}
      {props.notes.map(note =>
        <HabitNote
          handleNoteDelete={props.handleNoteDelete}
          id={note.id}
          key={note.id}
          note={note.note}
        />
      )}
    </div>
  );
};

HabitNotesList.propTypes = {
  handleNoteDelete: PropTypes.func.isRequired,
  notes: PropTypes.array.isRequired
};

export default HabitNotesList;
