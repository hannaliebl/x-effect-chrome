import React, { Component } from "react";
import PropTypes from "prop-types";
import FormError from "../Forms/FormError";

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
        {this.state.showInput && (
          <React.Fragment>
            <label className="block-form-el form-label" htmlFor="currentNote">
              {this.props.noteInputTitle}
            </label>
            <input
              className={`block-form-el form-input ${
                this.props.noteError ? "has-error" : ""
              }`}
              type="text"
              name="currentNote"
              id="currentNote"
              value={this.props.currentNote}
              onChange={this.props.handleCurrentNoteChange}
            />
            {this.props.noteError && (
              <FormError
                hasErrors={this.props.noteError}
                errorMsg="You have to enter a note to add a note."
              />
            )}
            <div className="row">
              <button
                className="button button-small pull-right"
                onClick={this.props.handleNoteAdd}
              >
                Add Note
              </button>
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default AddNotes;
