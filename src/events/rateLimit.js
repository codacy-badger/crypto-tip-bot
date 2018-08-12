export async function run(client, logger) {
  // Bot is being rate limited.
  logger.onRateLimit();
}
export { run as default };
