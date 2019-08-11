import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import EventList from '../EventList/EventList';
import cuid from 'cuid';
import {connect} from 'react-redux';
import {createEvent, deleteEvent, updateEvent} from '../eventActions'
const mapStateToProps = (state) => ({
    events: state.events
})
const actions = {
  createEvent,
  deleteEvent,
  updateEvent
}
class EventDashboard extends Component {
    
  

  
   handleDeleteEvent = (id) => {
     this.props.deleteEvent(id);
   }
    render() {
        
        const {events} = this.props;
        return (
            <div>
                 <Grid>
                     <Grid.Column width={10}>
                        <EventList deleteEvent = {this.handleDeleteEvent}  events={events}></EventList>
                     </Grid.Column>
                     <Grid.Column width={6}>
                       <h2>Activity Feed</h2>
                     </Grid.Column>
                 </Grid>
            </div>
        )
    }
}
export default connect(mapStateToProps, actions)(EventDashboard);