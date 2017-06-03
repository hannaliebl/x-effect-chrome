import React from 'react';
import './HabitTitle.css';

const HabitTitle = (props) => {
  return (
    <div className="title-container">
      <h1>{props.title}</h1>
      <h2>Started: 5/27/17</h2>
    </div>
  )
}

export default HabitTitle;
