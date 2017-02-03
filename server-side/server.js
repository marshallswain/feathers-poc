const feathers = require('feathers');
const rest = require('feathers-rest');
const bodyParser = require('body-parser');
const auth = require('feathers-authentication');
const jwt = require('feathers-authentication-jwt');
const local = require('feathers-authentication-local');
const hooks = require('feathers-hooks');
const errorHandler = require('feathers-errors/handler');
const NeDB = require('nedb');
const feathersNedb = require('feathers-nedb');
const sequelize = require('feathers-sequelize');
const cors = require('cors');
const socketio = require('feathers-socketio');
const db = require('./models');

const nedb = new NeDB({
  filename: './db-data/messages',
  autoload: true
});

const init = () => {
  const app = feathers();

  app.use(cors());
  app.configure(socketio({
    wsEngine: 'uws'
  }));
  app.configure(rest());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.configure(hooks());
  app.configure(auth({ secret: 'secret' }));
  app.configure(jwt());
  app.configure(local());
  app.use('/users', feathersNedb({
    Model: nedb
  }));

  app.service('/users').hooks({
    before: {
      create: [
        local.hooks.hashPassword()
      ]
    }
  });

  app.service('/authentication').hooks({
    before: {
      create: [
        auth.hooks.authenticate(['jwt', 'local']),
        function (hook) {
          console.log(hook.data);
          console.log(hook.params);
        }
      ]
    }
  });

  Object.keys(db.sequelize.models)
    .map(key => {
      app.use(`/db/${key}`, sequelize({
        Model: db[key],
        paginate: {
          default: 10,
          max: 25
        }
      }));
      app.service(`/db/${key}`).hooks({
        before: {
          all: [
            auth.hooks.authenticate(['jwt'])
          ]
        }
      });
    });

  app.use(errorHandler());
  app.listen(3030);
};

module.exports = () => init();
