const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const member = message.mentions.members.first();
    if (!member) {
        var error_mentions = new Discord.RichEmbed()
            .setDescription("❌ Merci de mentionner un utilisateur.")
            .setColor("#DD2E44")
        message.channel.send(error_mentions)
    }else {
    var calin = new Discord.RichEmbed()
        .setDescription("<@" + message.author.id + "> viens de faire un calin virtuel à " + "<@" + `${member.user.id}` + "> !")
        .setImage("http://ekladata.com/EDxnVqjF-j5BIE6OuXyXWWjL-0I.gif")
        .setColor("#FF131B")
    message.channel.send(calin)
}
}

module.exports.help = {
    name: "calin"
}