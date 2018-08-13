import Discord from 'discord.js';
import config from './config/config';

const client = new Discord.Client();

const bConfig = new Discord.Collection();
client.config = bConfig;

const bCommands = new Discord.Collection();
client.commands = bCommands;

const bAliases = new Discord.Collection();
client.aliases = bAliases;

/**
 * Login Discord Bot.
 * @returns {Promise}
 */
function login() {
  return client.login(config.botToken);
}

/**
 * Check whether the message is from a DM or a guild channel.
 * @param {String} message
 * @param {Function} callback
 */
function isDirectMessage(message, callback) {
  if (message.channel.type === 'dm') {
    callback(message);
  }
}

export default {
  client,
  login,
  isDirectMessage
};
