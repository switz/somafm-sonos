const channelCache = {};

fetch('https://api.somafm.com/channels.json', {
  headers: { 'user-agent': 'somafm/0.1 (https://github.com/switz/somafm-sonos)' },
})
  .then((res) => res.json())
  .then((json) => json.channels.map((channel) => (channelCache[channel.id] = channel)));

module.exports = channelCache;
