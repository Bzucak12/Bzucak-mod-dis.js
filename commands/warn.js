const punishments = require('../models/ModSchema');

module.exports.run = async (client, message, args) => {
    let toWarn = message.mentions.members.first() || message.guild.member.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("Nemáš oprávnění!")
    }

    if(message.author.id === toWarn.id) return;

    let reason = args.join(" ")

    if(!reason) retun; message.channel.send('Žadný důvod!')

    let data = await punishments.findOne({
        GuildID: message.guild.id,
        UserID: toWarn.id
    });

    if(data) {
        data.Punishments.unshift({
            PunishType: 'Warn',
            Modeartor: message.author.id,
            Reason: reason,
        });
        data.save();

        message.channel.send(`${toWarn} byl varován za \`${reason}\``)
    } else if (!data) {
        let newData = new punishments({
            guildID: message.guild.id,
            UserID: toWarn.id,
            Punishments: [{
                PunishType: 'Warn',
                Moderator: message.author.id,
                Reason: reason,
            }, ],
        });
        newData.save();

        message.channel.send(`${toWarn} byl varován za \`${reason}\``)
    }
}

module.exports.config = {
    name: "warn",
    aliases: []
}