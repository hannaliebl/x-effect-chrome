import React, { Component } from "react";
import XEffectContainer from "./components/XEffectContainer";
import ls from "./util/localstorage";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHabitCreated: false
    };
  }

  componentDidMount = () => {
    const lsAppExists = ls.appExists();
    this.setState({ isHabitCreated: lsAppExists });
  };

  handleHabitCreated = event => {
    this.setState({ isHabitCreated: true });
    ls.setValue("habitAppExists", "true");
  };

  handleHabitDelete = () => {
    if (
      window.confirm(
        "Are you sure you want to delete this habit and start over?"
      )
    ) {
      this.setState({ isHabitCreated: false });
      ls.deleteAll();
    }
  };

  render() {
    return (
      <div className="container">
        <XEffectContainer
          isHabitCreated={this.state.isHabitCreated}
          onCreate={this.handleHabitCreated}
          onDelete={this.handleHabitDelete}
        />
      </div>
    );
  }
}

export default App;
