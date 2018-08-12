export default {
  botToken: 'your_bot_token',

  commands: {
    prefix: '!'
  },

  directMessage: {
    enabled: false,
    messages: {
      notEnabled: 'Direct messages are not enabled at the moment, we are sorry.'
    }
  },

  logger: {
    dateFormat: 'MMMM Do YYYY, h:mm:ss',
    messages: {
      onError: 'An error has occurred. %error%',
      onConnect: 'The bot is connecting...',
      onReady: 'The bot is connected...',
      onDisconnect: 'The bot has disconnected...',
      onDirectMessage: {
        from: 'DM from %user%; with message : %message%',
        to: 'DM to %user%; with reason : %reason%'
      },
      onCommand: 'Responded to `%command%` command, requested by %user%'
    }
  }
};
