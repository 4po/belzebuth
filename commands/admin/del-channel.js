const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
        var error = new Discord.RichEmbed()
            .setDescription("❌ Vous ne disposez pas des permissions nécessaires pour supprimer ce channel.")
            .setColor("#DD2E44")
        message.channel.send(error)
    }
    if (message.member.hasPermission("ADMINISTRATOR")) {
    message.channel.delete()
    var channel_delete = new Discord.RichEmbed()
        .setDescription("✅ Le salon où vous avez effectué la commande **.del-channel** est désormais supprimé.")
        .setColor("#77B255")
    message.author.send(channel_delete)
}
}

module.exports.help = {
    name: "del-channel"
}