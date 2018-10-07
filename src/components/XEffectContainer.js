import React, { Component } from "react";
import moment from "moment";
import ls from "../util/localstorage";
import FormValidation from "../util/FormValidation";
import { generateId, addNote, removeNote } from "../util/noteHelpers";
import HabitGridBuilder from "./Forms/HabitGridBuilder";
import HabitGridContainer from "./HabitGridContainer";
import AddNotes from "./HabitNotes/AddNotes";
import AddNotesInput from "./HabitNotes/AddNotesInput";
import "./XEffectContainer.css";

class XEffectContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHabitCreated: ls.appExists(),
      habitTitle: ls.getData("habitTitle") || "",
      startDate: ls.getData("startDate") || "",
      dateFormat: ls.getData("dateFormat") || "",
      notes: JSON.parse(ls.getData("habitNotes")) || [],
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
      startDate = moment()
        .add(1, "days")
        .format("MMMM D, YYYY");
    }
    if (event.target.value === "custom") {
      startDate = moment("2018-08-15").format("MMMM D, YYYY");
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
    if (!event.keyCode || event.keyCode === 13) {
      const updatedNotes = removeNote(this.state.notes, id);
      this.setState({ notes: updatedNotes });
      ls.setValue("habitNotes", JSON.stringify(updatedNotes));
    }
  };

  handleHabitDeleteInBuilder = event => {
    if (!event.keyCode || event.keyCode === 13) {
      if (
        window.confirm(
          "Are you sure you want to delete this habit and start over?"
        )
      ) {
        this.setState({
          isHabitCreated: false,
          habitTitle: "",
          startDate: "",
          dateFormat: "",
          notes: [],
          currentNote: ""
        });
        ls.deleteAll();
      }
    }
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
      if (
        this.state[key] === "" ||
        this.state[key] === null ||
        /^\s*$/.test(this.state[key])
      ) {
        hasAnyErr = true;
        tempErrObj[key] = true;
      }
    });
    if (!hasAnyErr) {
      ls.setValue("habitTitle", this.state.habitTitle);
      ls.setValue("dateFormat", this.state.dateFormat);
      ls.setValue("startDate", this.state.startDate);
      ls.setValue("habitAppExists", "true");
      this.setState({ isHabitCreated: true, noteError: false });
    }
    this.setState({
      errors: tempErrObj
    });
  };

  handleNoteDelete = (id, event) => {
    if (!event.keyCode || event.keyCode === 13) {
      const updatedNotes = removeNote(this.state.notes, id);
      this.setState({ notes: updatedNotes });
      ls.setValue("habitNotes", JSON.stringify(updatedNotes));
    }
  };

  render() {
    const habitCreated = this.state.isHabitCreated;
    const addNotesInputInGrid = (
      <AddNotesInput
        noteError={this.state.noteError}
        currentNote={this.state.currentNote}
        handleCurrentNoteChange={this.handleCurrentNoteChange}
        handleNoteAdd={this.handleNoteAdd}
      />
    );
    const addNotesInputInBuilder = (
      <AddNotesInput
        noteInputTitle="Add Note (optional):"
        noteError={this.state.noteError}
        currentNote={this.state.currentNote}
        handleCurrentNoteChange={this.handleCurrentNoteChange}
        handleNoteAdd={this.handleNoteAdd}
      />
    );
    const addNotes = <AddNotes addNotesInput={addNotesInputInGrid} />;
    return (
      <div className="container">
        {habitCreated ? (
          <HabitGridContainer
            addNotes={addNotes}
            habitTitle={this.state.habitTitle}
            startDate={this.state.startDate}
            dateFormat={this.state.dateFormat}
            handleNoteDelete={this.handleNoteDelete}
            notes={this.state.notes}
            handleHabitDeleteInBuilder={this.handleHabitDeleteInBuilder}
          />
        ) : (
          <HabitGridBuilder
            addNotesInput={addNotesInputInBuilder}
            checkValues={this.checkValues}
            errors={this.state.errors}
            habitTitle={this.state.habitTitle}
            handleTitleChange={this.handleTitleChange}
            handleDateChange={this.handleDateChange}
            handleDateFormatChange={this.handleDateFormatChange}
            handleNoteDelete={this.handleNoteDelete}
            notes={this.state.notes}
          />
        )}
      </div>
    );
  }
}

export default XEffectContainer;
