import feathers from 'feathers';
import rest from 'feathers-rest';
import bodyParser from 'body-parser';
import auth from 'feathers-authentication';
import jwt from 'feathers-authentication-jwt';
import hooks from 'feathers-hooks';
import errorHandler from 'feathers-errors/handler';
import memory from 'feathers-memory';
import sequelize from 'feathers-sequelize';
import cors from 'cors';
import socketio from 'feathers-socketio';
const db = require('./models');

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
  app.use('/users', memory());

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

export const run = () => init();
