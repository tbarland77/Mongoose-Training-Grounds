const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// waits for mongoose to connect before moving onto the tests
before((done) => {
  mongoose.connect('mongodb://localhost/users_test');
  mongoose.connection
    .once('open', () => { done(); })
    .on('error', (error) => {
      console.warn('Warning', error);
    });
});

beforeEach( (done) => {
  mongoose.connection.collections.users.drop( () => {
    // removes any database entries to prepare for the next test
    done();
  });
});
