import React, { Component } from 'react';

class Grid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      completed: false
    }
  }
  handleClick = () => {
    let isCompleted = this.state.completed
    this.setState({completed: !isCompleted})
  }
  render() {
    return (
      <div className="grid-box" onClick={this.handleClick}>
        {(this.state.completed) && '✖' }
      </div>
    )
  }
}

export default Grid;
