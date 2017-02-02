import React, { Component } from 'react';
import { Header, Container, Segment, Card, Divider } from 'semantic-ui-react';
import client from './client';

class App extends Component {
  constructor() {
    super()
    client.authenticate({
      type: 'token',
      endpoint: '/authentication'
    })
    .then(console.log)
    .catch(console.error)
  }
  render() {
    return (
      <Container>
        <Segment padded>
          <Header dividing size='large'>Feathers Client</Header>
          <Divider hidden/>
          {/* <Card.Group items={this.state.films}/> */}
        </Segment>
      </Container>
    );
  }
}

export default App;
