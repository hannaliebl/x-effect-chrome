import React, { Component } from "react";
import PropTypes from "prop-types";
import HabitGrid from "./HabitGrid/HabitGrid";
import HabitTitle from "./HabitTitle/HabitTitle";
import HabitNotesList from "./HabitNotes/HabitNotesList";

class HabitGridContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      habitTitle,
      startDate,
      dateFormat,
      handleNoteDelete,
      notes,
      handleHabitDeleteInBuilder
    } = this.props;
    return (
      <div>
        <HabitTitle title={habitTitle} />
        <HabitGrid startDate={startDate} dateFormat={dateFormat} />
        <HabitNotesList handleNoteDelete={handleNoteDelete} notes={notes} />
        <div className="delete-grid-container">
          <div
            className="delete-grid-icon"
            tabIndex="0"
            onClick={handleHabitDeleteInBuilder}
            onKeyDown={handleHabitDeleteInBuilder}
          >
            x
          </div>
          <div className="delete-grid-text">
            Delete habit grid and start over
          </div>
        </div>
      </div>
    );
  }
}

HabitGridContainer.propTypes = {
  habitTitle: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  dateFormat: PropTypes.string.isRequired,
  handleNoteDelete: PropTypes.func.isRequired,
  notes: PropTypes.array.isRequired,
  handleHabitDeleteInBuilder: PropTypes.func.isRequired
};

export default HabitGridContainer;
