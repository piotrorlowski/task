const { Forbidden } = require('@feathersjs/errors');
import { app } from './app.js';

app.service('accounts').hooks({
  before: {
    find: [context => context.params.query = { active: true }]
  }
});


app.service('campaigns').hooks({
  before: {
    get: [context => {
      if (context.id === 10) {
        return new Forbidden();
      }
    }],
  }
});

