import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents, extractLocations } from "./api";
import './nprogress.css';
class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
  };
  
  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateNumberOfEvents = (numberOfEvents) => {
    this.setState(
      {
        numberOfEvents,
      },
      this.updateEvents(this.state.locations, numberOfEvents)
    );
  };

  updateEvents = (location, eventNumber) => {
    this.mounted = true;
    getEvents().then((events) => {
      const locationEvents =
      location === "all" && eventNumber === 0
      ? events
      : location !== "all" && eventNumber === 0
      ? events.filter((event) => event.location === location)
      : events.slice(0, eventNumber);
          if (this.mounted) {
          this.setState({
            events: locationEvents,
          numberOfEvents: eventNumber
      });
    }
    });
  };

  

  render() {
    return (
      <div className="App">
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        /> 
        <NumberOfEvents />
        <EventList
          events={this.state.events}
          numberOfEvents={this.state.numberOfEvents}
        />
       
      </div>
    );
  }
}

export default App;
