import React, { Component } from "react";
import PropTypes from "prop-types";

const AddNotes = props => {
  return (
    <React.Fragment>
      {!props.showAddNoteInput && (
        <button
          type="button"
          className="button button-small pull-right"
          onClick={props.handleShowNoteInput}
        >
          + Note
        </button>
      )}
      {props.showAddNoteInput && props.addNotesInput}
    </React.Fragment>
  );
};

AddNotes.propTypes = {
  addNotesInput: PropTypes.element.isRequired,
  showAddNoteInput: PropTypes.bool,
  handleShowNoteInput: PropTypes.func
};

export default AddNotes;
