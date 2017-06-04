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
  handleHabitDelete = () => {
    if (window.confirm('Are you sure you want to delete this habit and start over?')) {
      this.setState({isHabitCreated: false})
    }
  }
  render() {
    return (
      <div className="container">
        <HabitBuilder isHabitCreated={this.state.isHabitCreated} 
          onCreate={this.handleHabitCreated} 
          onDelete={this.handleHabitDelete} />
        <HabitNotesList notes={["foo", "bar", "baz"]} />
      </div>
    );
  }
}

export default App;
