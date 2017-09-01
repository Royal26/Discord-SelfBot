/**
 * @file The starting point of the self bot
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license MIT
 */

const Discord = require('discord.js');
const Client = new Discord.Client();

Client.credentials = require('./settings/credentials.json');
Client.config = require('./settings/config.json');
Client.log = require('./lib/logHandler');
require('./lib/eventHandler')(Client);
Client.commands = require('./lib/commandLoader');

Client.login(Client.credentials.token).catch(e => {
  Client.log.error(e);
  process.exit(1);
});

process.on('unhandledRejection', rejection => {
  // eslint-disable-next-line no-console
  console.warn(`\n<unhandledRejection>\n${rejection}\n</unhandledRejection>\n`);
});
