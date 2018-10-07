import React from "react";
import PropTypes from "prop-types";
import FormError from "../Forms/FormError";

const AddNotesInput = props => {
  return (
    <React.Fragment>
      <label className="block-form-el form-label" htmlFor="currentNote">
        {props.noteInputTitle}
      </label>
      <input
        className={`block-form-el form-input ${
          props.noteError ? "has-error" : ""
        }`}
        type="text"
        name="currentNote"
        id="currentNote"
        value={props.currentNote}
        onChange={props.handleCurrentNoteChange}
      />
      {props.noteError && (
        <FormError
          hasErrors={props.noteError}
          errorMsg="You have to enter a note to add a note."
        />
      )}
      <div className="row">
        <button
          className="button button-small pull-right"
          onClick={props.handleNoteAdd}
        >
          Add Note
        </button>
      </div>
    </React.Fragment>
  );
};

AddNotesInput.propTypes = {
  noteInputTitle: PropTypes.string,
  noteError: PropTypes.bool.isRequired,
  currentNote: PropTypes.string,
  handleCurrentNoteChange: PropTypes.func.isRequired,
  handleNoteAdd: PropTypes.func.isRequired
};

export default AddNotesInput;
