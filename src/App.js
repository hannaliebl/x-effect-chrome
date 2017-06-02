import React, { Component } from 'react';
import HabitGrid from './components/HabitGrid/HabitGrid';
import HabitTitle from './components/HabitTitle/HabitTitle';
import HabitNotesList from './components/HabitNotes/HabitNotesList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <HabitTitle />
        <HabitGrid />
        <HabitNotesList notes={["foo", "bar", "baz"]} />
      </div>
    );
  }
}

export default App;
