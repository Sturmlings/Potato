const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "kill",
  description: "blood..",
  testOnly: true,

  callback: (client, interaction) => {

    const embed = new EmbedBuilder()
      .setColor(0x8b7045)
      .setTitle("Why is this a command..")

    interaction.reply({ embeds: [embed] });
  },
};