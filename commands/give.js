const mongoCurrency = require('discord-mongo-currency');

module.exports.run = async (client, message, args) => {
    const member = message.mentions.members.first();

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("Nemáš oprávnění!")
    }

    if(!member) return message.channel.send('Musíš uvéct komu chceš přičíst peníze!')
    if(!args[1]) return message.channel.send('Musíš zadat částku!')
    if(args[1].isNaN) return;

    await mongoCurrency.giveCoins(member.id, message.guild.id, `${args[1]}`)
    message.channel.send(`Bylo přičteno \`${args[1]}\` na účet ${member}`)
}

module.exports.config = {
    name: "give",
    aliases: ['g']
}