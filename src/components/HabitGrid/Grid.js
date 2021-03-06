import React, { Component } from "react";
import PropTypes from "prop-types";
import { format, add, isToday, isBefore, parseISO } from "date-fns";
import ls from "../../util/localstorage";

class Grid extends Component {
  constructor(props) {
    super(props);

    const lsKey = `habitGrid${props.rowId}${props.gridId}`;
    let gridStateFromLs;
    if (ls.getData(lsKey) === null) {
      ls.setValue(lsKey, "false");
    } else {
      gridStateFromLs = ls.getData(lsKey) === "true";
    }

    const isPast = isBefore(
      parseISO(format(this.getDate(), "yyy-MM-dd")),
      parseISO(format(new Date(), "yyy-MM-dd"))
    );

    this.state = {
      completed: gridStateFromLs || false,
      date: format(this.getDate(), this.props.dateFormat),
      isToday: isToday(this.getDate()),
      isPast
    };
  }

  getDate = () => {
    const startDate = new Date(this.props.startDate);
    const buffer =
      parseInt(this.props.rowId * 7, 10) + parseInt(this.props.gridId, 10);
    if (buffer === 0) {
      return startDate;
    }
    return add(startDate, { days: buffer });
  };

  handleClick = event => {
    if (!event.keyCode || event.keyCode === 13) {
      const lsKey = `habitGrid${this.props.rowId}${this.props.gridId}`;
      let isCompleted = this.state.completed;
      this.setState({ completed: !isCompleted });
      ls.setValue(lsKey, !isCompleted);
    }
  };

  render() {
    const { isPast, isToday, completed, date } = this.state;
    const clickHandleShow = isPast || isToday;
    let addClickHandler = null;
    if (clickHandleShow) {
      addClickHandler = this.handleClick;
    } else {
      addClickHandler = false;
    }
    return (
      <div
        tabIndex={isToday || isPast ? "0" : "-1"}
        className={
          "grid-box " +
          (isToday ? "is-today " : "") +
          (isPast ? "is-past " : "") +
          (completed ? "is-completed" : "")
        }
        onClick={addClickHandler ? this.handleClick : undefined}
        onKeyDown={addClickHandler ? this.handleClick : undefined}
      >
        {completed && (
          <div className="grid-x">
            <svg viewBox="0 0 40 40">
              <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </div>
        )}
        <div className="grid-date">{date}</div>
      </div>
    );
  }
}

Grid.propTypes = {
  dateFormat: PropTypes.string.isRequired,
  gridId: PropTypes.string.isRequired,
  rowId: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired
};

export default Grid;
