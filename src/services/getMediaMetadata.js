const winston = require('../logger');
const channelCache = require('../lib/channelCache');

const getMediaMetadata = (type, id, callback) => {
  const [, channelId] = id.match(/Channel:(.*)/);

  const channel = channelCache[channelId];

  if (!channel) return callback({ getMediaMetadataResult: {} });

  // const id = `Channel:${channelId}`;

  callback({
    getMediaMetadataResult: {
      id,
      itemType: 'stream',
      mimeType: 'audio/x-scpls',
      title: channel.title,
      canPlay: true,
      streamMetadata: {
        logo: channel.xlimage,
        currentShow: [channel.title, 'SomaFM'].join(' - '),
        currentShowId: channel.id,
        description: channel.description,
        currentHost: channel.dj,
        isEphemeral: false,
      },
    },
  });
};

module.exports = (type) => (args, callback) => {
  const id = args.id;
  if (!id) return;

  winston.info('getMediaMetadata', id);
  winston.I.increment('sonos.wsdl.getMediaMetadata');
  return getMediaMetadata(type, id, callback);
};
