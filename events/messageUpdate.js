const Discord = require("discord.js");
const channelModel = require('../models/channelModel');

module.exports = async (client, oldMessage, newMessage) => {
    const data = await channelModel.findOne({
        GuildID: oldMessage.guild.id
    });

    let channel = client.channels.cache.get(data.ChannelID)

    channel.send(`Stará správa: ${oldMessage}\n Nová správa: ${newMessage}`);
}