import feathers from 'feathers/client';
import hooks from 'feathers-hooks';
import rest from 'feathers-rest/client';
import auth from 'feathers-authentication-client';
// import socketio from 'feathers-socketio/client';
// import io from 'socket.io-client';
import axios from 'axios';

const host = 'http://localhost:3030';
const client = feathers()
  .configure(rest(host).axios(axios))
  // .configure(socketio(io(host)))
  .configure(hooks())
  .configure(auth({
    storage: window.localStorage
  }));

export default client;
