import React, { Component } from 'react';
import { Header, Container, Segment, Card, Divider } from 'semantic-ui-react';
import client from './client';

class App extends Component {
  constructor () {
    super();
    var loginData = {};
    if (!window.localStorage.getItem('feathers-jwt')) {
      loginData = {
        strategy: 'local',
        email: 'marshall@creativeideal.net',
        password: 'feathers'
      };
    }
    client.authenticate(loginData)
    .then(console.log)
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
