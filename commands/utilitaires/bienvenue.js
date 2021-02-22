const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const member = message.mentions.members.first();
    if (!member) {
        var error_mentions = new Discord.RichEmbed()
            .setDescription("❌ Vous devez mentionner un utilisateur pour lui souhaiter la bienvenue.")
            .setColor("DD2E44")
        message.channel.send(error_permissions)
    }else {
        var bienvenue = new Discord.RichEmbed()
            .setDescription("<@" + message.author.id + "> viens de souhaiter la bienvenue à " + "<@" + `${member.user.id}` + "> !")
            .setColor("#363940")
        message.channel.send(bienvenue)
        message.delete()
    }
}

module.exports.help = {
    name: "bienvenue"
}