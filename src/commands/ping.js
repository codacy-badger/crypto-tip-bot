export async function run(client, message) {
  message.channel.send(`Pong ! My ping is ${Math.round(client.ping)} ms.`);
}

export const conf = {
  enabled: true,
  admin_only: false,
  guild_only: false
};

export const help = {
  name: 'ping',
  description: 'Latency of the bot.',
  usage: 'ping',
  aliases: ['p1ng']
};
