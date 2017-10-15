import React, { Component } from "react";
import PropTypes from "prop-types";

class HabitNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDelete: false
    };
  }
  handleMouseEnter = () => {
    this.setState({ showDelete: true });
  };
  handleMouseLeave = () => {
    this.setState({ showDelete: false });
  };
  render() {
    const handleRemove = this.props.handleNoteDelete.bind(null, this.props.id);
    return (
      <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        className="note"
      >
        {this.props.note}
        {this.state.showDelete &&
          <span className="delete-trigger" onClick={handleRemove}>
            x
          </span>}
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
