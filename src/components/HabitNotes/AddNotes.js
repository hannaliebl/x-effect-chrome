import React, { Component } from "react";
import PropTypes from "prop-types";

class AddNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInput: false
    };
  }

  handleNoteInputToggle = event => {
    this.setState({ showInput: !this.state.showInput });
  };

  render() {
    const buttonText = this.state.showInput ? "-" : "+ Note";
    return (
      <React.Fragment>
        <button onClick={this.handleNoteInputToggle}>{buttonText}</button>
        {this.state.showInput && this.props.addNotesInput}
      </React.Fragment>
    );
  }
}

AddNotes.propTypes = {
  addNotesInput: PropTypes.element.isRequired
};

export default AddNotes;
