const { EmbedBuilder } = require('discord.js');
module.exports = {
    name: "kill",
    description: "blood.. :knife:",
    testOnly: true,
  
    callback: (client, interaction) => {
  
      const killEmbed = new EmbedBuilder()
        .setTitle("Why is this a command..")
  
      interaction.reply({ embeds: [killEmbed] })
    },
  };
  