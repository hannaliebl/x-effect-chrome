import React from 'react';
import './HabitTitle.css';

const HabitTitle = (props) => {
  return (
    <div className="title-container">
      <h1>{props.title}</h1>
      <h2>Started: {props.startDate}</h2>
    </div>
  )
}

export default HabitTitle;
