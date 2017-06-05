import React, { Component } from 'react';
import moment from 'moment';

class Grid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      completed: false,
      date: this.getDate(),
      isToday: false
    }
  }
  getDate = () => {
    const startDate = moment(this.props.startDate, 'MMMM D, YYYY');
    const buffer = (parseInt((this.props.rowId * 7), 10)) + (parseInt((this.props.gridId), 10))
    if (buffer === 0) {
      return moment(this.props.startDate, 'MMMM D, YYYY').format('MM/DD/YY')
    }
    return startDate.add(buffer, 'days').format('MM/DD/YY')
  }
  componentDidMount = () => {
    const today = moment().format('YYYY-MM-DD')
    const dateFormatted = moment(this.state.date, 'MM/DD/YY').format('YYYY-MM-DD')
    const isToday = moment(dateFormatted).isSame(today, 'YYYY-MM-DD');
    this.setState({isToday})
  }
  handleClick = () => {
    let isCompleted = this.state.completed
    this.setState({completed: !isCompleted})
  }
  render() {
    return (
      <div className="grid-box" onClick={this.handleClick}>
        {(this.state.completed) && <div className="grid-x">✖</div> }
        <div className="grid-date">{this.state.date}</div>
        {(this.state.isToday) && 'today' }
      </div>
    )
  }
}

export default Grid;
