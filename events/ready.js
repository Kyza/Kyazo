module.exports = (client) => {
  const fs = require("fs");

  const defaultConfig = require("../default-config.json");

  console.log("Verifying guild configs.");

  for (let [guildID, guild] of client.guilds.entries()) {
    console.log(guildID);
    if (!fs.existsSync("./guilds/" + guildID + ".json")) {
      fs.writeFile("./guilds/" + guildID + ".json", JSON.stringify(defaultConfig, null, 2), function(err) {
        if (err) throw err;
        console.log("Added a new server.");
      });
    }
  }

  console.log(`Ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
}
