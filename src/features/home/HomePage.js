import React from 'react'
import { Segment, Container, Header, Image, Button, Icon } from 'semantic-ui-react';

const HomePage = ({history}) => {
    return (
           <Segment inverted textAlign='center' vertical className='masthead'>
           <Container text>
             <Header as='h1' inverted>
               <Image
                 size='massive'
                 src='/assets/hhlogo2.png'
                 alt='logo'
                 style={{ marginBottom: 12 }}
               />
               Helping Hands
             </Header>
             <Button onClick={()=> history.push('/events')} size='huge' inverted>
               Get started
               <Icon name='right arrow' inverted />
             </Button>
           </Container>
         </Segment>
    )
}

export default HomePage
