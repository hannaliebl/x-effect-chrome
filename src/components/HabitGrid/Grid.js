import React, { Component } from 'react';
import moment from 'moment';

class Grid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      completed: false,
      date: this.getDate()
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
  handleClick = () => {
    let isCompleted = this.state.completed
    this.setState({completed: !isCompleted})
  }
  render() {
    return (
      <div className="grid-box" onClick={this.handleClick}>
        {this.state.date}
        {(this.state.completed) && '✖' }
      </div>
    )
  }
}

export default Grid;
