const { lookup } = require('dns/promises');

(async () => {
  try {
    const message = await lookup('google.com');
    console.log(message);
  } catch (error) {
    console.log(error);
  }
})();
