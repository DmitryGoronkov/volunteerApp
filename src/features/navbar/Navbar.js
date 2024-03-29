import React, { Component } from 'react'
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import SignedOutMenu from './Menus/SignedOutMenu';
import SignedInMenu from './Menus/SignedInMenu';

class Navbar extends Component {
    state={
      authenticated: false
    }

    handleSignIn = () => {
      this.setState({authenticated: true})
    }
    handleSignOut = () => {
      this.setState({authenticated: false})
      this.props.history.push('/')
    }

    render() {
        const {authenticated} = this.state;
        return (
            <div>
                      <Menu inverted fixed="top">
                        <Container>
                          <Menu.Item as={NavLink} exact to='/' header>
                            <img src="assets/hhlogo2.png" alt="logo" />
                            HelpingHands
                          </Menu.Item>
                          <Menu.Item as={NavLink} exact to='/events' name="Events" />
                          <Menu.Item as={NavLink} to='/people' name="People" />
                          <Menu.Item>
                            <Button as={Link} to ='/createEvent' floated="right" positive inverted content="Create Event" />
                          </Menu.Item>
                          {authenticated ? <SignedInMenu signOut={this.handleSignOut}></SignedInMenu> : <SignedOutMenu signIn={this.handleSignIn}></SignedOutMenu> }
                          
                          
                        </Container>
                      </Menu>
            </div>
        )
    }
}
export default withRouter(Navbar);
