import fs from 'fs';
import discord from './src/discord';
import logger from './src/logger';

// Load the events folder and instantiate them in the bot.
fs.readdir('./src/events/', (err, files) => {
  if (err) return logger.onError(err);

  files.forEach((file) => {
    if (!file.endsWith('.js')) return;

    const event = require(`./src/events/${file}`);
    const eventName = file.split('.')[0];
    logger.onInfo(`Loading event ... ${eventName}`);
    discord.client.on(eventName, (...args) => event.run(discord.client, logger, ...args));
  });
});

discord.login();
