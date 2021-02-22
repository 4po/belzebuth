const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const member = message.mentions.users.first();
    if (!member) {
        var avatar_user = new Discord.RichEmbed()
            .setTitle("🔍 | Avatar de " + "**" + message.author.username + "**")
            .setImage(message.author.avatarURL)
            .setFooter("🔨 | Demandé par " + message.author.username + "#" + message.author.discriminator)
            .setColor("#00FF00")
        message.channel.send(avatar_user)
    }
    if (member) {
        var avatar_user_mentionned = new Discord.RichEmbed()
            .setTitle("🔍 | Avatar de " + member.username)
            .setImage(member.avatarURL)
            .setColor("#00FF00")
            .setFooter("🔨 | Demandé par " + message.author.username + "#" + message.author.discriminator)
        message.channel.send(avatar_user_mentionned)
    }
    }

module.exports.help = {
    name: "avatar"
}