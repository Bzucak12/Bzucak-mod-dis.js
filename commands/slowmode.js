module.exports.run = async (client, message, args) => {
    if (message.member.roles.cache.has('866734753956364299')) {
        const messageArray = message.content.split(' ');
        const args1 = messageArray.slice(1);

        message.channel.setRateLimitPerUser(args1[0])
        message.channel.send(`Slowmode je ${args1[0]}s`)
    } else {
        message.channel.send(`${message.author} nemáš opravnění!`)
    }
}

module.exports.config = {
    name: "slowmode",
    aliases: ['sm']
}