import React, { Component } from 'react';
import { Header, Container, Segment, Card, Divider } from 'semantic-ui-react';
import client from './client';

class App extends Component {
  constructor () {
    super();
    client.authenticate({
      strategy: 'jwt',
      endpoint: '/authorization'
    })
    .then(res => {
      console.log(res);
      client.service('/db/film').get(1)
      .then(console.log)
      .catch(console.error);
    })
    .catch(console.error);
  }
  render () {
    return (
      <Container>
        <Segment padded>
          <Header dividing size='large'>Feathers Client</Header>
          <Divider hidden />
          {/* <Card.Group items={this.state.films}/> */}
        </Segment>
      </Container>
    );
  }
}

export default App;
