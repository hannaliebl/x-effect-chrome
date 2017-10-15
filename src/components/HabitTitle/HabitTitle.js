import React from "react";
import PropTypes from "prop-types";
import "./HabitTitle.css";

const HabitTitle = props => {
  return (
    <div className="title-container">
      <h1>
        {props.title}
      </h1>
    </div>
  );
};

HabitTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default HabitTitle;
