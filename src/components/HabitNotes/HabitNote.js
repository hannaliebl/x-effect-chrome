import React, { Component } from "react";
import PropTypes from "prop-types";

class HabitNote extends Component {
  render() {
    const handleRemove = this.props.handleNoteDelete.bind(null, this.props.id);
    return (
      <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        className="note"
      >
        {this.props.note}
        <span
          tabIndex="0"
          className="delete-trigger"
          onKeyDown={handleRemove}
          onClick={handleRemove}
        >
          x
        </span>
      </div>
    );
  }
}

HabitNote.propTypes = {
  handleNoteDelete: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  note: PropTypes.string.isRequired
};

export default HabitNote;
