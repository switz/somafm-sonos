const winston = require('../logger');

const reportPlaySeconds = (type, id, seconds, callback) => {
  callback({
    reportPlaySecondsResult: '',
  });
};

module.exports = (type) => (args, callback) => {
  const { id, seconds } = args;

  // winston.info('reportPlaySeconds', { type, id, seconds, args });
  winston.I.increment('sonos.wsdl.reportPlaySeconds');
  return reportPlaySeconds(type, id, seconds, callback);
};
