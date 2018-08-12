import fs from 'fs';
import config from '../config/config';

export async function run(client, logger) {
  // Load the configuration and instantiate it in the bot.
  client.config = config;

  // Load the commands folder and instantiate them in the bot.
  fs.readdir('./src/commands/', (err, files) => {
    if (err) return logger.onError(err);

    files.forEach((file) => {
      if (!file.endsWith('.js')) return;

      const props = require(`../../src/commands/${file}`);
      if (props.conf.enabled === false) return;

      const commandName = props.help.name;
      logger.onInfo(`Loading command ... ${commandName}`);
      client.commands.set(commandName, props);
      logger.onInfo(`Loading aliases for ... ${commandName}`);
      props.help.aliases.forEach((alias) => {
        client.aliases.set(alias, props);
      });
    });
  });

  // Bot is ready to serve.
  logger.onReady();
}
export { run as default };
