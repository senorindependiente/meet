import React, { Component } from "react";

class Event extends Component {
  state = {
    collapsed: true,
  };

  handleClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { event } = this.props;
    const { collapsed } = this.state;

    return (
      <div className="event">
        <h1 className="summary">{event.summary}</h1>

        <p className="start-date">
          {event.start.dateTime} ({event.start.timeZone})
        </p>
        <p className="location">{event.location}</p>
        <button onClick={this.handleClick} className="show-details hide-details">
          {collapsed ? "Show Details" : "Hide Details"}
        </button>

        {!collapsed && (
          <div className="extra-details">
            <h3>About the event:</h3>
            <a href={event.htmlLink} rel="noreferrer" target="_blank">
              See details on Google Calendar
            </a>
            <p className="event-description">{event.description}</p>
          </div>
        )}
      </div>
    );
  }
}
export default Event;
