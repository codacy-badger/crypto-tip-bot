export async function run(client, message) {
  message.channel.send('Restarting ...')
    .then(client.destroy())
    .then(client.login(client.config.botToken));
}

export const conf = {
  enabled: true,
  admin_only: true,
  guild_only: false
};

export const help = {
  name: 'restart',
  description: 'Restart the bot and re-fetch all the commands.',
  usage: 'restart',
  aliases: ['reload']
};
