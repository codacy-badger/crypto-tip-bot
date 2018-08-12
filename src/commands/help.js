export async function run(client, message, command, args) {
  if (!args[0]) {
    let listCommand = '';
    client.commands.forEach((cmd) => {
      listCommand += `${command.help.name} used with ${client.config.commands.prefix}${cmd.help.usage}\n`;
    });

    message.channel.send(listCommand);
  } else {
    const helpCommand = client.commands.get(args[0]) || client.aliases.get(args[0]);
    message.channel.send(helpCommand.help.usage);
  }
}

export const conf = {
  enabled: true,
  admin_only: false,
  guild_only: true
};

export const help = {
  name: 'help',
  description: 'Show help about all or a specific command.',
  usage: 'help [command](optional)',
  aliases: ['h', 'halp']
};
