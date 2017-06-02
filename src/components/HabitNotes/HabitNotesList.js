import React from 'react';
import HabitNote from './HabitNote';
import './HabitNotes.css';

const HabitNotesList = (props) => {
  return (
    <div className="notes-container">
      {props.notes.map((note, index) => <HabitNote key={index} note={note} />)}
    </div>
  )
}

export default HabitNotesList;
