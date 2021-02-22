const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var infodiscord = new Discord.RichEmbed()
        .setAuthor(`${message.guild.name}`, message.guild.iconURL)
        .setThumbnail(message.guild.iconURL)
        .addField("📌 Propriétaire :", message.guild.owner, true)
        .addField("🌏 Région :", message.guild.region, true)
        .addField("📋 Channels :", message.guild.channels.size, true)
        .addField("💻 Membres :", message.guild.memberCount, true)
        .addField("📄 ID :", message.guild.id, true)
        .setColor("#00FF00")
        .setFooter("📆 Ce serveur a été créé le " + message.guild.createdAt)
    message.channel.send(infodiscord)
}

module.exports.help = {
    name: "infodiscord"
}