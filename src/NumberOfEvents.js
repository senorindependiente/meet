import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberofEvents: 32,
  };

  handleInputChanged = (event) => {
    const number = event.target.value;
    if (number <= 0 || number > 32) {
      this.setState({
        // message: "Enter number between 1 and 32",
      });
    } else {
      this.setState({
        numberOfEvents: number,
        // message: "",
      });
    }
  };

  render() {
    return (
      <div className="NumberOfEvents">
          <p>Number of Events:</p>
        <input
        type="number"
          className="numberinput"
          onChange={this.handleInputChanged}
          value={this.state.numberOfEvents}
        />

      </div>
    );
  }
}

export default NumberOfEvents;