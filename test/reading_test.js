const assert = require('assert');
const User = require('../src/user');

describe('Reading records', () => {
  let joe;
  // before each test create an instance of the user model/class called joe
  beforeEach((done) => {
    joe = new User({ name: 'Joe'});
    joe.save()
      .then(() => done());
  });

  it('finds all users with a name of joe', (done) => {
    User.find({ name: 'Joe' })
      .then((users) => {
        // _id is an object id not a raw string
        assert(users[0]._id.toString() === joe._id.toString());
        done();
      });
  });
});
