const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
    var error = new Discord.RichEmbed()
        .setDescription("❌ Vous ne disposez pas des permissions nécessaires pour effectuer cette commande.")
        .setColor("#DD2E44")
    message.channel.send(error)
    }
    if (message.member.hasPermission("ADMINISTRATOR")){
    let args = message.content.split(" ").slice(1);
    let majtext = args.join(" ")
    var maj = new Discord.RichEmbed()
        .setTitle("<:updates:504265297046405120> MISE À JOUR :")
        .setDescription(majtext)
        .setColor("#3B8667")
    message.channel.send(maj)
    message.delete()
}
}

module.exports.help = {
    name: "maj"
}