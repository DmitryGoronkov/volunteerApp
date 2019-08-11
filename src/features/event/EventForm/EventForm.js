import React, { Component } from 'react'
import { Segment, Form, Button, Grid, Header} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {createEvent, updateEvent} from '../eventActions'
import {cuid} from 'cuid';
import {reduxForm, Field} from 'redux-form';
import TextInput from '../../../common/form/TextInput';
import TextArea from '../../../common/form/TextArea';
import SelectInput from '../../../common/form/SelectInput';
const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {
        title: '',
        date: '',
        city: '',
        venue: '',
        hostedBy: ''
  }

  if (eventId && state.events.length > 0){
    event = state.events.filter(event => event.id === eventId)[0]
  }

  return {
    event
  }
}
const actions = {
  createEvent,
  updateEvent
}
const category = [
    {key: 'drinks', text: 'Drinks', value: 'drinks'},
    {key: 'culture', text: 'Culture', value: 'culture'},
    {key: 'film', text: 'Film', value: 'film'},
    {key: 'food', text: 'Food', value: 'food'},
    {key: 'music', text: 'Music', value: 'music'},
    {key: 'travel', text: 'Travel', value: 'travel'},
];
class EventForm extends Component {
    // state = {
    //     ...this.props.event
        
    // }
    // componentDidMount (){
    //    if (this.props.selectedEvent !== null) {
    //      this.setState({
    //        ...this.props.selectedEvent
    //      })
    //    }
    // }
    // handleInputChange = ({target: {name, value}}) =>{
    //     this.setState({
    //         [name]: value
    //     })
    // }
    handleFormSubmit = evt => {
        evt.preventDefault();
        if (this.state.id) {
          this.props.updateEvent(this.state);
          this.props.history.push(`/events/${this.state.id}`)
        } else {
          const newEvent = {
            ...this.state,
            id: cuid(),
            hostPhotoURL: '/assets/user.png'
          }
          this.props.createEvent(newEvent);
          this.props.history.push(`/events/${newEvent.id}`)
        }
    }
    render() {
        // const {cancelFormOpen} = this.props;
        // const {title, date, city, venue, hostedBy} = this.state;
        return (
            <div>
                    <Grid>
                      <Grid.Column width={10}>
                      <Segment>
                        <Header sub color='teal' content='Event Details'/>
                        <Form onSubmit={this.handleFormSubmit} autoComplete='off'>
                          <Field name='title' component={TextInput} placeholder='Give your event a name'/>
                          <Field name='category' component={SelectInput} options={category} multiple={true} placeholder='What is your event about?'/>
                          <Field name='description' component={TextArea} placeholder='Tell us about your event'/>
                          <Header sub color='teal' content='Event Location Details'/>
                          <Field name='city' component={TextInput} placeholder='Whats your event city?'/>
                          <Field name='venue' component={TextInput} placeholder='What venue is your event in?'/>
                          <Field name='date' component={TextInput} placeholder='When is your event?'/>
                          
                          <Button positive type="submit">
                            Submit
                          </Button>
                          <Button onClick={this.props.history.goBack} type="button">Cancel</Button>
                        </Form>
                      </Segment>
                      </Grid.Column>
                    </Grid>
                      
            </div>
        )
    }
}

export default connect(mapStateToProps, actions )(reduxForm({form: 'eventForm'})(EventForm));
