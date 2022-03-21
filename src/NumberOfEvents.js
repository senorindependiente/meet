import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    query: 32,
  };

  handleInput = (event) => {
    const value = event.target.value;
    this.setState({
      query: value
    });
  };

  render() {
    return (
      <div className="NumberOfEvents">
          <p>Number of Events:</p>
        <input
          type="number"
          className="number"
          value={this.state.query}
          onChange={this.handleInput}
        />

      </div>
    );
  }
}

export default NumberOfEvents;