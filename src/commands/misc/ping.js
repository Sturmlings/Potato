const { EmbedBuilder } = require("discord.js");
module.exports = {
  name: "ping",
  description: "Pong!",
  // devOnly: Boolean,
  testOnly: true,
  // options: Object[],
  // deleted: Boolean,

  callback: (client, interaction) => {
    //interaction.reply(`Pong! ${client.ws.ping}ms`);

    const embed = new EmbedBuilder()
      .setColor(0x8b7045)
      .setTitle("Pong! :ping_pong:")
      .setDescription(`Latency: \`${client.ws.ping}\`ms`)
      .setFooter({ text: "potato" });

    interaction.reply({ embeds: [embed] });
  },
};
