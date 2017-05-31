import React, { Component } from 'react';
import HabitGrid from './components/HabitGrid/HabitGrid';
import HabitTitle from './components/HabitTitle/HabitTitle';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <HabitTitle />
        <HabitGrid />
      </div>
    );
  }
}

export default App;
