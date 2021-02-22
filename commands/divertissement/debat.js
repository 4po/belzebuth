const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        var error = new Discord.RichEmbed()
        .setDescription("❌ Vous ne disposez pas des permissions nécessaires pour effectuer cette commande.")
        .setColor("#DD2E44")
    message.channel.send(error)
    }
    if (message.member.hasPermission("MANAGE_MESSAGES")){
    let args = message.content.split(" ").slice(1);
    let debattext = args.join(" ")
    var debat = new Discord.RichEmbed()
        .setTitle("⚡ DÉBAT :")
        .setDescription(debattext)
        .setColor("#FFC83D")
    message.channel.send(debat)
    message.delete()
}
}

module.exports.help = {
    name: "debat"
}