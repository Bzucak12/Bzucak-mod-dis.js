const Discord = require('discord.js');
const client = new Discord.Client({
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});
require('dotenv').config()
require('./utils/loadEvents')(client);
const { loadCommands } = require('./utils/loadCommands');
const mongoose = require('mongoose');
const mongoCurrency = require('discord-mongo-currency');

mongoose.connect(process.env.mongodb, { useNewUrlParser: true, useUnifiedTopology: true})
mongoCurrency.connect(process.env.mongodb);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.snipes = new Discord.Collection();

loadCommands(client);
client.login(process.env.TOKEN);