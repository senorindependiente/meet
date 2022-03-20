import React, { Component } from 'react';
import Event from "../Event"

class EventList extends Component {
  render() {
    return (
    
        <ul className='Eventlist'>
{events.map(event =>
    <li>
        <Event event={event}/>
    </li>
    )}


        </ul>

    );
  }
}

export default EventList;