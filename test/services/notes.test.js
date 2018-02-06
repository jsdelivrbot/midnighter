const assert = require('assert');
const app = require('../../server/app');

describe('\'notes\' service', () => {
  it('registered the service', () => {
    const service = app.service('notes');

    assert.ok(service, 'Registered the service');
  });
});
