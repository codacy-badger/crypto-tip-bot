import discord from '../discord';

export async function run(client, logger, message) {
  // Check if the message author is a bot.
  if (message.author.bot) return;

  // Handle direct message to the bot.
  discord.isDirectMessage(message, (dm) => {
    if (client.config.directMessage.enabled === false) {
      dm.author.send(client.config.directMessage.messages.notEnabled)
        .then(logger.onDirectMessage(dm, 'not_enabled'))
        .catch(e => logger.onError(e));
    } else {
      // TO-DO: Support direct message
      logger.onDirectMessage(dm);
    }
  });

  // Check if message starts with the command prefix, fetch the command, then try to execute it.
  if (!message.content.toLowerCase().startsWith(client.config.commands.prefix)) return;
  const args = message.content.toLowerCase().trim().slice(client.config.commands.prefix.length).split(/ +/g);
  const command = args.shift().toLowerCase();

  // Check if the command typed exist in the Command or Aliases collection.
  const commandFile = client.commands.get(command) || client.aliases.get(command);
  if (commandFile) {
    // Allow if the command is for ADMINISTRATOR and allow the message author to perform it or not.
    if (commandFile.conf.admin_only === true && !message.member.hasPermission('ADMINISTRATOR')) return;

    // Check if the command can be executed from a dm channel.
    if (commandFile.conf.guild_only === true && message.channel.type === 'dm') return;

    commandFile.run(client, message, command, args)
      .then(logger.onCommand(message, commandFile.help.name))
      .catch(e => logger.onError(e));
  }
}
export { run as default };
