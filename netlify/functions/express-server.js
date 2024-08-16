const server = require('../../src/api/server'); 

exports.handler = async (event, context) => {
  return new Promise((resolve, reject) => {
    server.handle(event, context, (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result);
    });
  });
};
