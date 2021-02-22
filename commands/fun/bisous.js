const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const member = message.mentions.members.first();
    if (!member) {
        var error = new Discord.RichEmbed()
            .setDescription("❌ Vous devez mentionner une personne pour lui faire un bisous virtuel.")
            .setColor("#DD2E44")
        message.channel.send(error)
    }
    if (member) {
        var bisous = new Discord.RichEmbed()
            .setDescription("<@" + message.author.id + "> viens de faire un bisous virtuel à " + "<@" + `${member.user.id}` + "> !")
            .setImage("http://mamietitine.m.a.pic.centerblog.net/2785827980_1.gif")
            .setColor("#FFF721")
        message.channel.send(bisous)
    }
}

module.exports.help = {
    name: "bisous"
}