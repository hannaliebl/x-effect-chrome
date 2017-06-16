import React, { Component } from 'react';

class HabitNote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showDelete: false
    }
  }
  handleMouseEnter = () => {
    this.setState({showDelete: true})
  }
  handleMouseLeave = () => {
    this.setState({showDelete: false})
  }
  // handleRemove = () => {
  //   this.props.handleNoteDelete.bind(null, this.props.id)
  // }
  render() {
    const handleRemove = this.props.handleNoteDelete.bind(null, this.props.id)
    return (
      <div onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        className="note">
        {this.props.note}
        {this.state.showDelete && <span className="delete-trigger" onClick={handleRemove}>x</span>}
      </div>
    )
  }
}

export default HabitNote;
