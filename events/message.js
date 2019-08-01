module.exports = (client, message) => {
  // Ignore all bots
  if (message.author.bot) return;

  console.log(message.content);

  // Ignore messages not starting with the prefix (in config.json)
  if (message.content.indexOf(client.bot_tag) !== 0) return;

  // Our standard argument/command name definition.
  var args = message.content.slice(client.bot_tag).trim().split(/ +/g);
  args.shift();
  const command = args[0].toLowerCase();
  console.log(command);

  // Grab the command data from the client.commands Enmap
  const cmd = client.commands.get(command);

  // If that command doesn't exist, silently exit and do nothing
  if (!cmd) return;

  // Run the command
  cmd.run(client, message, args);
};
