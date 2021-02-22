const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let arg = message.content.split(" ").slice(1);
    let thingToEcho = arg.join(" ")
    if (!args[0]) {
        var error_one = new Discord.RichEmbed()
            .setDescription("❌ Merci d'inclure un message pour effectuer cette commande.")
            .setColor("#DD2E44")
        message.channel.send(error_one)
    }else {
    var color = new Discord.RichEmbed()
        .setDescription(thingToEcho)
        .setColor("#0000FF")
        .setFooter(`Envoyé par ${message.author.tag}`, message.author.avatarURL)
    message.channel.send(color)
    message.delete()
}
}

module.exports.help = {
    name: "color-bleu"
}