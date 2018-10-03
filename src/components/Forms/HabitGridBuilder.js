import React from "react";
import PropTypes from "prop-types";
import FormError from "./FormError";
import HabitNotesList from "../HabitNotes/HabitNotesList";

const HabitGridBuilder = props => {
  return (
    <div>
      <h1>Create a New Habit</h1>
      <form onSubmit={props.checkValues}>
        <label className="block-form-el form-label" htmlFor="habitTitle">
          Title:
        </label>
        <input
          className={`block-form-el form-input ${
            props.errors.habitTitle ? "has-error" : ""
          }`}
          type="text"
          name="habitTitle"
          id="habitTitle"
          value={props.habitTitle}
          onChange={props.handleTitleChange}
        />
        {props.errors.habitTitle && (
          <FormError
            hasErrors={props.errors.habitTitle}
            errorMsg="A title is required."
          />
        )}
        <div className="form-title">Start Date:</div>
        <div className="form-radio">
          <label className="form-label-radio" htmlFor="today">
            <input
              type="radio"
              name="startDate"
              id="today"
              value="today"
              onChange={props.handleDateChange}
            />{" "}
            Today
          </label>
        </div>
        <div className="form-radio">
          <label className="form-label-radio" htmlFor="tomorrow">
            <input
              type="radio"
              name="startDate"
              id="tomorrow"
              value="tomorrow"
              onChange={props.handleDateChange}
            />{" "}
            Tomorrow
          </label>
        </div>
        <div className="form-radio">
          <label className="form-label-radio" htmlFor="custom">
            <input
              type="radio"
              name="startDate"
              id="custom"
              value="custom"
              onChange={props.handleDateChange}
            />{" "}
            Custom
          </label>
        </div>
        {props.errors.startDate && (
          <FormError
            hasErrors={props.errors.startDate}
            errorMsg="A start date is required."
          />
        )}
        <div className="form-title">Date Format:</div>
        <div className="form-radio">
          <label className="form-label-radio" htmlFor="mmddyy">
            <input
              type="radio"
              name="dateFormat"
              id="mmddyy"
              value="mmddyy"
              onChange={props.handleDateFormatChange}
            />{" "}
            MM/DD/YY
          </label>
        </div>
        <div className="form-radio">
          <label className="form-label-radio" htmlFor="ddmmyy">
            <input
              type="radio"
              name="dateFormat"
              id="ddmmyy"
              value="ddmmyy"
              onChange={props.handleDateFormatChange}
            />{" "}
            DD/MM/YY
          </label>
        </div>
        {props.errors.dateFormat && (
          <FormError
            hasErrors={props.errors.dateFormat}
            errorMsg="A date format is required."
          />
        )}
        <label className="block-form-el form-label" htmlFor="currentNote">
          Add Notes (optional):
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
        <HabitNotesList
          handleNoteDelete={props.handleNoteDelete}
          notes={props.notes}
        />
        <div className="row">
          <button className="pull-right button" type="submit">
            Create Habit →
          </button>
        </div>
      </form>
    </div>
  );
};

HabitGridBuilder.propTypes = {
  checkValues: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  habitTitle: PropTypes.string.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  handleDateChange: PropTypes.func.isRequired,
  handleDateFormatChange: PropTypes.func.isRequired,
  noteError: PropTypes.bool.isRequired,
  currentNote: PropTypes.string.isRequired,
  handleCurrentNoteChange: PropTypes.func.isRequired,
  handleNoteAdd: PropTypes.func.isRequired,
  handleNoteDelete: PropTypes.func.isRequired,
  notes: PropTypes.array.isRequired
};

export default HabitGridBuilder;
