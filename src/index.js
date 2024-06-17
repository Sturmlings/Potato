require('dotenv').config();
const { Client, IntentsBitField, EmbedBuilder, Message } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('ready', (c) => {
  console.log('A potato has been picked from the garden.')
})

client.on('interactionCreate', (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ping'){
    const startTime = Date.now()
    const endTime = Date.now()
    const ping = endTime - startTime;

    const embed = new EmbedBuilder()
    .setColor(0x8b7045)
    .setTitle('Pong! 🏓')
    .setDescription(`Latency: ${ping}ms`)
    .setFooter({ text: 'potato'})


    interaction.reply({ embeds: [embed] })
  }
})

client.login(process.env.TOKEN);
