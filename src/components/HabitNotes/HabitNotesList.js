import React from "react";
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

export default HabitNotesList;
