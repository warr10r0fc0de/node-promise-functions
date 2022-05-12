const { lookup } = require('dns');

lookup('google.com', (err, address) => {
  if (err) { console.log(err.message); } else { console.log(address); }
});
