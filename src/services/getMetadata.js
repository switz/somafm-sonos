const winston = require('../logger');

const API_ROOT = 'https://api.somafm.com/channels.json';

const getRoot = (callback) => {
  fetch(API_ROOT, {
    headers: { 'user-agent': 'somafm/0.1 (https://github.com/switz/somafm-sonos)' },
  })
    .then((res) => res.json())
    .then((json) => {
      const results = json.channels
        .map((channel) => {
          const id = `Channel:${channel.id}`;

          return {
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
          };
        })
        .filter((x) => x);

      callback({
        getMetadataResult: {
          index: 0,
          count: results.length,
          total: results.length,
          mediaMetadata: results,
        },
      });
    });
  // .catch((err) => {
  //   winston.error(err);
  //   return callback({});
  // });
};

module.exports = () => (args, callback) => {
  const id = args.id;

  winston.info('getMetadata', { id, args });

  if (id === 'root') {
    winston.I.increment('sonos.wsdl.getMetadata.root');
    return getRoot(callback);
  }
};
