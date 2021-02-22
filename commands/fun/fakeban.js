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
        var fakeban = new Discord.RichEmbed()
            .setDescription("<@" + message.author.id + "> viens de tenter de bannir " + "<@" + `${member.user.id}` + "> mais a échoué !")
            .setThumbnail("http://image.noelshack.com/fichiers/2018/43/6/1540632505-banned.png")
            .setColor("#E12631")
        message.channel.send(fakeban)
        }
}

module.exports.help = {
    name: "fakeban"
}