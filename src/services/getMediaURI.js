const winston = require('../logger');
const channelCache = require('../lib/channelCache');

const getMediaURI = (type, id, callback) => {
  const [, channelId] = id.match(/Channel:(.*)/);

  const channel = channelCache[channelId];

  if (!channel) return callback({ getMediaURIResult: '' });

  const stream =
    channel.playlists.find((x) => x.format === 'mp3' && x.quality === 'highest') ||
    channel.playlists.find((x) => x.format === 'mp3');

  if (!stream) return callback({ getMediaURIResult: '' });

  callback({
    getMediaURIResult: stream.url || '',
  });
};

module.exports = (type) => (args, callback) => {
  const id = args.id;

  winston.info('getMediaURI', { type, id });
  winston.I.increment('sonos.wsdl.getMediaURI');
  return getMediaURI(type, id, callback);
};
