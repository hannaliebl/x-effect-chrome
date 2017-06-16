import React, { Component } from 'react';
import HabitBuilder from './components/HabitBuilder/HabitBuilder';
import ls from './util/localstorage';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHabitCreated: false
    }
  }
  componentWillMount = () => {
    const lsAppExists = ls.checkApp()
    this.setState({isHabitCreated: lsAppExists})
  }
  handleHabitCreated = (event) => {
    event.preventDefault()
    this.setState({isHabitCreated: true})
    ls.setValue('habitAppExists', 'true')
  }
  handleHabitDelete = () => {
    if (window.confirm('Are you sure you want to delete this habit and start over?')) {
      this.setState({isHabitCreated: false})
      ls.deleteAll()
    }
  }
  render() {
    return (
      <div className="container">
        <HabitBuilder isHabitCreated={this.state.isHabitCreated}
          onCreate={this.handleHabitCreated}
          onDelete={this.handleHabitDelete} />
      </div>
    );
  }
}

export default App;
