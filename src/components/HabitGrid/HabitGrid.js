import React, { Component } from 'react';
import GridRow from './GridRow';
import './HabitGrid.css';

class HabitGrid extends Component {
  constructor(props) {
    super()
    this.state = {
      rows: [
        [true, false, false, false, false, false, false],
        [false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false]
      ]
    }
  }
  render () {
    return (
      <div className="grid-container">
        <GridRow row={this.state.rows[0]} />
        <GridRow row={this.state.rows[1]} />
        <GridRow row={this.state.rows[2]} />
        <GridRow row={this.state.rows[3]} />
        <GridRow row={this.state.rows[4]} />
        <GridRow row={this.state.rows[5]} />
        <GridRow row={this.state.rows[6]} />
      </div>
    )
  }
}

export default HabitGrid;
