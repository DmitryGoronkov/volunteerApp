import React from 'react'
import { Grid } from 'semantic-ui-react';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedSidebar from './EventDetailedSidebar';
import { connect } from 'react-redux';
// All the component own parametrs can be accessed through the second paramtr here - ownProps
const mapStateToProps = (state, ownProps) => {
    const eventId = ownProps.match.params.id;

    let event = {};

    if (eventId && state.events.length > 0){
        event = state.events.filter(event => event.id === eventId)[0]
    }
    return {
        event
    }
}
const EventDetailedPage = ({event}) => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventDetailedHeader event = {event}></EventDetailedHeader>
                <EventDetailedInfo event = {event}></EventDetailedInfo>
                <EventDetailedChat></EventDetailedChat>
            </Grid.Column>
            <Grid.Column width={6}>
                <EventDetailedSidebar attendees={event.attendees}/>
            </Grid.Column>
        </Grid>
    )
}

export default connect(mapStateToProps)(EventDetailedPage)
