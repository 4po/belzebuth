const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const member = message.mentions.members.first();
    if (!member) {
        var error_mentions = new Discord.RichEmbed()
            .setDescription("❌ Merci de mentionner une personne pour déclarer votre amitié.")
            .setColor("#DD2E44")
        message.channel.send(error_mentions)
    }else {
        var declarer_amitie = new Discord.RichEmbed()
            .setDescription("<@" + message.author.id + "> viens de déclarer son amitié à " + "<@" + `${member.user.id}` + "> !")
            .setThumbnail("https://logos.textgiraffe.com/logos/logo-name/Amitie-designstyle-love-heart-m.png")
            .setColor("#EE3695")
        message.channel.send(declarer_amitie)
    }
}

module.exports.help = {
    name: "declarer-amitie"
}