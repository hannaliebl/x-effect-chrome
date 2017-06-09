import React, { Component } from 'react';
import moment from 'moment';
import HabitGrid from '../HabitGrid/HabitGrid';
import HabitTitle from '../HabitTitle/HabitTitle';
import ls from '../../util/localstorage';

class HabitBuilder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      habitTitle: "",
      startDate: ""
    }
  }
  componentWillMount = () => {
    const habitTitle = ls.getData('habitTitle')
    const startDate = ls.getData('habitStartDate')
    this.setState({startDate, habitTitle})
  }
  handleTitleChange = (event) => {
    event.preventDefault()
    this.setState({habitTitle: event.target.value})
    ls.setValue('habitTitle', event.target.value)
  }
  handleDateChange = (event) => {
    let startDate = moment().format('MMMM D, YYYY')
    if (event.target.value === 'tomorrow') {
      startDate = moment().add(1, 'days').format('MMMM D, YYYY')
    }
    if (event.target.value === 'custom') {
      startDate = moment('2017-05-22').format('MMMM D, YYYY')
    }
    this.setState({startDate: startDate})
    ls.setValue('habitStartDate', startDate)
  }
  render() {
    const habitCreated = this.props.isHabitCreated
    if (habitCreated) {
      return (
        <div>
          <HabitTitle title={this.state.habitTitle} />
          <HabitGrid startDate={this.state.startDate}/>
          <span onClick={this.props.onDelete}>Delete habit grid and start over</span>
        </div>
      )
    }
    return (
      <form onSubmit={this.props.onCreate}>
        <label htmlFor="habitTitle">
          Title:
        </label>
        <input type="text"
          name="habitTitle"
          id="habitTitle"
          value={this.state.habitTitle}
          onChange={this.handleTitleChange} />
        <label htmlFor="today">
          <input type="radio"
            name="startDate"
            id="today"
            value="today"
            onChange={this.handleDateChange} /> Today
        </label>
        <label htmlFor="tomorrow">
          <input type="radio"
            name="startDate"
            id="tomorrow"
            value="tomorrow"
            onChange={this.handleDateChange} /> Tomorrow
        </label>
        <button type="submit">Create Habit</button>
      </form>
    )
  }
}

export default HabitBuilder;
