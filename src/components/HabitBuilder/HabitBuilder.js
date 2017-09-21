import React, { Component } from "react";
import moment from "moment";
import FormError from "./FormError";
import HabitGrid from "../HabitGrid/HabitGrid";
import HabitTitle from "../HabitTitle/HabitTitle";
import HabitNotesList from "../HabitNotes/HabitNotesList";
import ls from "../../util/localstorage";
import FormValidation from "../../util/FormValidation";
import { generateId, addNote, removeNote } from "../../util/noteHelpers";
import "./HabitBuilder.css";

class HabitBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      habitTitle: "",
      startDate: "",
      dateFormat: "",
      notes: [],
      currentNote: "",
      noteError: false,
      errors: {
        habitTitle: false,
        startDate: false,
        dateFormat: false,
        currentNote: false
      }
    };
  }
  componentWillMount = () => {
    let habitTitle = ls.getData("habitTitle");
    habitTitle = habitTitle === null ? "" : habitTitle;
    let notes = JSON.parse(ls.getData("habitNotes"));
    notes = notes === null ? [] : notes;
    const startDate = ls.getData("startDate");
    const dateFormat = ls.getData("dateFormat");
    this.setState({ startDate, habitTitle, notes, dateFormat });
  };
  handleTitleChange = event => {
    event.preventDefault();
    if (this.state.errors.habitTitle) {
      this.handleErrors(event);
    }
    this.setState({ habitTitle: event.target.value });
  };
  handleDateFormatChange = event => {
    if (this.state.errors.dateFormat) {
      this.handleErrors(event);
    }
    if (event.target.value === "mmddyy") {
      this.setState({ dateFormat: "MM/DD/YY" });
    }
    if (event.target.value === "ddmmyy") {
      this.setState({ dateFormat: "DD/MM/YY" });
    }
  };
  handleDateChange = event => {
    let startDate = moment().format("MMMM D, YYYY");
    if (this.state.errors.startDate) {
      this.handleErrors(event);
    }
    if (event.target.value === "tomorrow") {
      startDate = moment().add(1, "days").format("MMMM D, YYYY");
    }
    if (event.target.value === "custom") {
      startDate = moment("2017-08-30").format("MMMM D, YYYY");
    }
    this.setState({ startDate: startDate });
  };
  handleCurrentNoteChange = event => {
    this.setState({
      currentNote: event.target.value
    });
  };
  handleNoteAdd = event => {
    event.preventDefault();
    const hasError = FormValidation("currentNote", this.state.currentNote);
    this.setState({ noteError: hasError });
    if (!hasError) {
      const newId = generateId();
      const newNote = { id: newId, note: this.state.currentNote };
      const updatedNotes = addNote(this.state.notes, newNote);
      this.setState({
        notes: updatedNotes,
        currentNote: ""
      });
      ls.setValue("habitNotes", JSON.stringify(updatedNotes));
    }
  };
  handleNoteDelete = (id, event) => {
    event.preventDefault();
    const updatedNotes = removeNote(this.state.notes, id);
    this.setState({ notes: updatedNotes });
    ls.setValue("habitNotes", JSON.stringify(updatedNotes));
  };
  handleHabitDeleteInBuilder = () => {
    this.setState({
      habitTitle: "",
      startDate: "",
      dateFormat: "",
      notes: [],
      currentNote: ""
    });
    this.props.onDelete();
  };
  handleErrors = event => {
    const hasError = FormValidation(event.target.name, event.target.value);
    this.setState({
      errors: { ...this.state.errors, [event.target.name]: hasError }
    });
  };
  checkValues = event => {
    let hasAnyErr = false;
    const tempErrObj = {
      habitTitle: false,
      startDate: false,
      dateFormat: false
    };
    const valuesCheck = ["habitTitle", "startDate", "dateFormat"];
    event.preventDefault();
    valuesCheck.forEach(key => {
      if (this.state[key] === "" || this.state[key] === null) {
        hasAnyErr = true;
        tempErrObj[key] = true;
      }
    });
    if (!hasAnyErr) {
      ls.setValue("habitTitle", this.state.habitTitle);
      ls.setValue("dateFormat", this.state.dateFormat);
      ls.setValue("startDate", this.state.startDate);
      this.props.onCreate.bind(null, this.state.errors)(event);
    }
    this.setState({
      errors: tempErrObj
    });
  };
  render() {
    const habitCreated = this.props.isHabitCreated;
    if (habitCreated) {
      return (
        <div>
          <HabitTitle title={this.state.habitTitle} />
          <HabitGrid
            startDate={this.state.startDate}
            dateFormat={this.state.dateFormat}
          />
          <HabitNotesList
            handleNoteDelete={this.handleNoteDelete}
            notes={this.state.notes}
          />
          <div className="delete-grid-container">
            <div
              className="delete-grid-icon"
              onClick={this.handleHabitDeleteInBuilder}
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
    return (
      <div>
        <h1>Create a New Habit</h1>
        <form onSubmit={this.checkValues}>
          <label className="block-form-el form-label" htmlFor="habitTitle">
            Title:
          </label>
          <input
            className={`block-form-el form-input ${this.state.errors.habitTitle
              ? "has-error"
              : ""}`}
            type="text"
            name="habitTitle"
            id="habitTitle"
            value={this.state.habitTitle}
            onChange={this.handleTitleChange}
          />
          {this.state.errors.habitTitle &&
            <FormError
              hasErrors={this.state.errors.habitTitle}
              errorMsg="A title is required."
            />}
          <div className="form-title">Start Date:</div>
          <div className="form-radio">
            <label className="form-label-radio" htmlFor="today">
              <input
                type="radio"
                name="startDate"
                id="today"
                value="today"
                onChange={this.handleDateChange}
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
                onChange={this.handleDateChange}
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
                onChange={this.handleDateChange}
              />{" "}
              Custom
            </label>
          </div>
          {this.state.errors.startDate &&
            <FormError
              hasErrors={this.state.errors.startDate}
              errorMsg="A start date is required."
            />}
          <div className="form-title">Date Format:</div>
          <div className="form-radio">
            <label className="form-label-radio" htmlFor="mmddyy">
              <input
                type="radio"
                name="dateFormat"
                id="mmddyy"
                value="mmddyy"
                onChange={this.handleDateFormatChange}
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
                onChange={this.handleDateFormatChange}
              />{" "}
              DD/MM/YY
            </label>
          </div>
          {this.state.errors.dateFormat &&
            <FormError
              hasErrors={this.state.errors.dateFormat}
              errorMsg="A date format is required."
            />}
          <label className="block-form-el form-label" htmlFor="currentNote">
            Add Notes (optional):
          </label>
          <input
            className={`block-form-el form-input ${this.state.noteError
              ? "has-error"
              : ""}`}
            type="text"
            name="currentNote"
            id="currentNote"
            value={this.state.currentNote}
            onChange={this.handleCurrentNoteChange}
          />
          {this.state.noteError &&
            <FormError
              hasErrors={this.state.noteError}
              errorMsg="You have to enter a note to add a note."
            />}
          <div className="row">
            <button
              className="button button-small pull-right"
              onClick={this.handleNoteAdd}
            >
              Add Note
            </button>
          </div>
          <HabitNotesList
            handleNoteDelete={this.handleNoteDelete}
            notes={this.state.notes}
          />
          <div className="row">
            <button className="pull-right button" type="submit">
              Create Habit →
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default HabitBuilder;
