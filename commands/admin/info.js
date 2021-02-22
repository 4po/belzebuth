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
    let infotext = args.join(" ")
    var info = new Discord.RichEmbed()
        .setTitle("📢 INFOS :")
        .setDescription(infotext)
        .setColor("#E81224")
    message.channel.send(info)
    message.delete()
}
}

module.exports.help = {
    name: "info"
}