import React, { Component, Fragment } from 'react'
import EventListItem from './EventListItem';

export default class EventList extends Component {
    render() {
        const {events,  deleteEvent} = this.props;
        return (
            <Fragment>
                {events.map(event => (
                    <EventListItem deleteEvent={deleteEvent} key={event.id} event={event} />
                ))}
                
            </Fragment>
        )
    }
}
