import React, {Component, Fragment} from 'react';

import './App.css';
import EventDashboard from './features/event/EventDashboard/EventDashboard';
import Navbar from './features/navbar/Navbar';
import { Container } from 'semantic-ui-react';


class App extends Component {
  render(){
    return (
      <Fragment>
        <Navbar></Navbar>
        <Container className="main">
          <EventDashboard></EventDashboard>
        </Container>
      </Fragment>
    );
  }
}

export default App;
