import React, { Component } from 'react';
import HabitGrid from '../HabitGrid/HabitGrid';
import HabitTitle from '../HabitTitle/HabitTitle';

class HabitBuilder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      habitTitle: "",
      dateBegan: ""
    }
  }
  handleTitleChange = (event) => {
    event.preventDefault()
    this.setState({habitTitle: event.target.value})
  }
  render() {
    const habitCreated = this.props.isHabitCreated
    if (habitCreated) {
      return (
        <div>
          <HabitTitle title={this.state.habitTitle} />
          <HabitGrid />
        </div>
      )
    }
    return (
      <form onSubmit={this.props.onCreate}>
        <input type="text" 
          name="habitTitle" 
          value={this.state.habitTitle} 
          onChange={this.handleTitleChange} />
        <button type="submit">Create Habit</button>
      </form>
    )
  }
}

export default HabitBuilder;
