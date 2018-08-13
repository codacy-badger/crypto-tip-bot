export default {
  botToken: 'your_bot_token',
  mongoDB: {
    host: '127.0.0.1',
    port: 27017,
    database: 'crypto-tip-bot'
  },
  cryptocurrency: {
    name: 'Bitcoin',
    node: {
      host: '127.0.0.1',
      port: 8332,
      username: 'Ulysseys',
      password: 'YourSuperGreatPasswordNumber_DO_NOT_USE_THIS_OR_YOU_WILL_GET_ROBBED_385593'
    }
  },

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
      onReady: 'The bot is connected...',
      onDisconnect: 'The bot has disconnected...',
      onRateLimit: 'The bot is being rate limited by the API...',
      onDirectMessage: {
        from: 'DM from %user%; with message : %message%',
        to: 'DM to %user%; with reason : %reason%'
      },
      onCommand: 'Responded to `%command%` command, requested by %user%'
    }
  }
};
