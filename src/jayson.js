import jayson from 'jayson';
import logger from './logger';
import config from './config/config';

const client = jayson.client.http({
  host: config.cryptocurrency.node.host,
  port: config.cryptocurrency.node.port,
  auth: `${config.cryptocurrency.node.username}:${config.cryptocurrency.node.password}`,
  method: 'POST'
});

function getNewAddress(callback) {
  client.request('getnewaddress', [], (err, response, result) => {
    if (err) return logger.onError(err);

    callback(result);
  });
}

export default {
  getNewAddress
};
