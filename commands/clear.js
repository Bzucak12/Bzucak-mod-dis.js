module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("Nemáš oprávnění!")
    }

    let deleteAmount;

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.channel.send('Prosím vlož číslo!') }

    if (parseInt(args[0]) > 100) { return message.reply('Můžeš smazat pouze 100 správ najednou!') } else { deleteAmount = parseInt(args[0]); }

    message.channel.bulkDelete(deleteAmount + 1, true);
}

module.exports.config = {
    name: "clear",
    aliases: ['c']
}