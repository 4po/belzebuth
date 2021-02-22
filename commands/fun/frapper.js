const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const member = message.mentions.members.first();
    if (!member) {
        var error = new Discord.RichEmbed()
            .setDescription("❌ Merci de mentionner un utilisateur.")
            .setColor("#DD2E44")
        message.channel.send(error)
    }
    if (member) {
        var frapper = new Discord.RichEmbed()
            .setDescription("<@" + message.author.id + "> viens de frapper virtuellement " + "<@" + `${member.user.id}` + "> !")
            .setImage("https://image.flaticon.com/icons/png/512/62/62300.png")
            .setColor("#000000")
        message.channel.send(frapper)
    }
}

module.exports.help = {
    name: "frapper"
}