const { lookup } = require('dns');
const { promisify } = require('util');

const hostPromise = promisify(lookup);

hostPromise('google.com')
  .then((address) => console.log(address))
  .catch((err) => console.log(err));
