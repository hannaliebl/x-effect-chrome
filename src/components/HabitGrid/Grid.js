import React, { Component } from "react";
import moment from "moment";
import ls from "../../util/localstorage";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false,
      date: this.getDate(),
      isToday: false,
      isPast: false
    };
  }
  getDate = () => {
    const startDate = moment(this.props.startDate, "MMMM D, YYYY");
    const buffer =
      parseInt(this.props.rowId * 7, 10) + parseInt(this.props.gridId, 10);
    if (buffer === 0) {
      return moment(this.props.startDate, "MMMM D, YYYY").format(
        this.props.dateFormat
      );
    }
    return startDate.add(buffer, "days").format(this.props.dateFormat);
  };
  componentWillMount = () => {
    const lsKey = `habitGrid${this.props.rowId}${this.props.gridId}`;
    if (ls.getData(lsKey) === null) {
      ls.setValue(lsKey, "false");
    } else {
      const gridStateFromLs = ls.getData(lsKey) === "true";
      this.setState({ completed: gridStateFromLs });
    }
  };
  componentDidMount = () => {
    const today = moment().format("YYYY-MM-DD");
    const dateFormatted = moment(this.state.date, this.props.dateFormat).format(
      "YYYY-MM-DD"
    );
    const isToday = moment(dateFormatted).isSame(today, "YYYY-MM-DD");
    const isPast = moment(dateFormatted).isBefore(today, "YYYY-MM-DD");
    this.setState({ isToday });
    this.setState({ isPast });
  };
  handleClick = () => {
    const lsKey = `habitGrid${this.props.rowId}${this.props.gridId}`;
    let isCompleted = this.state.completed;
    this.setState({ completed: !isCompleted });
    ls.setValue(lsKey, !isCompleted);
  };
  render() {
    const clickHandleShow = this.state.isPast || this.state.isToday;
    let clickResult = null;
    if (clickHandleShow) {
      clickResult = this.handleClick;
    } else {
      clickResult = false;
    }
    return (
      <div
        className={
          "grid-box " +
          (this.state.isToday ? "is-today " : "") +
          (this.state.isPast ? "is-past " : "") +
          (this.state.completed ? "is-completed" : "")
        }
        onClick={clickResult}
      >
        {this.state.completed &&
          <div className="grid-x">
            <svg viewBox="0 0 40 40">
              <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </div>}
        <div className="grid-date">
          {this.state.date}
        </div>
      </div>
    );
  }
}

export default Grid;
