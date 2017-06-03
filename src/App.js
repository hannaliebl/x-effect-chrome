import React, { Component } from 'react';
import HabitBuilder from './components/HabitBuilder/HabitBuilder';
import HabitNotesList from './components/HabitNotes/HabitNotesList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHabitCreated: false
    }
  }
  handleHabitCreated = (event) => {
    event.preventDefault()
    this.setState({isHabitCreated: true})
  }
  render() {
    return (
      <div className="container">
        <HabitBuilder isHabitCreated={this.state.isHabitCreated} onCreate={this.handleHabitCreated} />
        <HabitNotesList notes={["foo", "bar", "baz"]} />
      </div>
    );
  }
}

export default App;
