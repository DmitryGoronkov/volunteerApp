import React, {Component, Fragment} from 'react';

import './App.css';
import EventDashboard from './features/event/EventDashboard/EventDashboard';
import Navbar from './features/navbar/Navbar';
import { Container } from 'semantic-ui-react';
import { BrowserRouter, Switch, withRouter } from 'react-router-dom';
import Route from "react-router-dom/Route";
import HomePage from './features/home/HomePage'
import EventDetailedPage from './features/event/EventDetailed/EventDetailedPage';
import PeopleDashboard from './features/user/PeopleDashboard/PeopleDashboard'
import UserDetailedPage from './features/user/UserDetailed/UserDetailedPage'
import SettingsDashboard from './features/user/Settings/SettingsDashboard'
import EventForm from './features/event/EventForm/EventForm';
import Test from './features/text/Test';


class App extends Component {
  render(){
    return (
      <Fragment>
           <Route exact path='/' component={HomePage}/>
           <Route path='/(.+)' render={() => (
              <Fragment>
                <Navbar></Navbar>
                <Container className="main">
                {/* The key in the switch gives each page a unique key so that the component re-renders - yopu need withRouter */}
                  <Switch key={this.props.location.key}> 
                    <Route exact path='/events' component={EventDashboard}/>
                    <Route path='/events/:id' component={EventDetailedPage}/>
                    <Route path='/people' component={PeopleDashboard}/>
                    <Route path='/profile/:id' component={UserDetailedPage}/>
                    <Route path='/settings' component={SettingsDashboard}/>
                    <Route path={['/createEvent', '/manage/:id']} component={EventForm}/>
                    <Route path='/test' component={Test}/>
                  </Switch>
                </Container>
               </Fragment>
              )}/>
    </Fragment>
      
    );
  }
}

export default withRouter(App);
