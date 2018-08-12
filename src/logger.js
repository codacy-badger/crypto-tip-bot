import winston from 'winston';
import moment from 'moment';
import config from '../config';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

/**
 * Return Moment.js formatted date.
 * @returns {String}
 */
function getDateConfig() {
  const { dateFormat } = config.logger.dateFormat;

  return moment().format(dateFormat);
}

/**
 * Catch info.
 * @param {String} info
 */
function onInfo(info) {
  logger.info(`[${getDateConfig()}] ${info}`);
}

/**
 * Catch errors.
 * @param {String} error
 */
function onError(error) {
  const msgError = config.logger.messages.onError.replace('%error%', error);

  logger.error(`[${getDateConfig()}] ${msgError}`);
}

/**
 * Catch logged in process log.
 */
function onReady() {
  const msgReady = config.logger.messages.onReady;

  logger.info(`[${getDateConfig()}] ${msgReady}`);
}

/**
 * Catch disconnection process log.
 */
function onDisconnect() {
  const msgDisconnect = config.logger.messages.onDisconnect;

  logger.info(`[${getDateConfig()}] ${msgDisconnect}`);
}

/**
 * Catch onDirectMessage event process log.
 * @param {String} message
 * @param {String} reason
 */
function onDirectMessage(message, reason = null) {
  if (reason === null) {
    const msgDirectMessage = config.logger.messages.onDirectMessage.from.replace('%user%', message.author.toString()).replace('%message%', message.content);

    logger.info(`[${getDateConfig()}] ${msgDirectMessage}`);
  } else {
    const msgDirectMessage = config.logger.messages.onDirectMessage.to.replace('%user%', message.author.toString()).replace('%reason%', reason);

    logger.info(`[${getDateConfig()}] ${msgDirectMessage}`);
  }
}

/**
 * Catch onCommand event process log.
 * @param {String} message
 * @param {String} command
 */
function onCommand(message, command) {
  const msgCommand = config.logger.messages.onCommand.replace('%command%', command).replace('%user%', message.author.toString());

  logger.info(`[${getDateConfig()}] ${msgCommand}`);
}

export default {
  onInfo,
  onError,
  onReady,
  onDisconnect,
  onDirectMessage,
  onCommand
};
