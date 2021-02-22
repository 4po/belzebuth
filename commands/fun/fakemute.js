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
        var fakemute = new Discord.RichEmbed()
            .setDescription("<@" + message.author.id + "> a tenté de mute " + "<@" + `${member.user.id}` + "> mais a échoué !")
            .setThumbnail("http://image.noelshack.com/fichiers/2018/43/6/1540646885-muted.png")
            .setColor("#000000")
        message.channel.send(fakemute)
    }
}

module.exports.help = {
    name: "fakemute"
}