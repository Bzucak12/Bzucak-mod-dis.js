const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("Nemáš oprávnění!")
    }
    
    const msg = client.snipes.get(message.channel.id)
    const embed = new Discord.MessageEmbed()
    .setAuthor(msg.author, msg.member.user.displayAvatarURL)
    .setDescription(msg.content)
    .setTimestamp();
    message.channel.send(embed);
}

module.exports.config = {
    name: "snipe",
    aliases: ['sn']
}