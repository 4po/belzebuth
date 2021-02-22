const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (message.member.hasPermission("MANAGE_MESSAGES")){
        let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ")
        message.channel.send(thingToEcho)
        message.delete()
    if (!args[0]) {
        var error_one = new Discord.RichEmbed()
            .setDescription("❌ Merci d'inclure un message pour effectuer ce sondage.")
            .setColor("#DD2E44")
        message.channel.send(error_one)
    }
}else{
    var error = new Discord.RichEmbed()
        .setDescription("❌ Vous ne disposez pas des permissions nécessaires pour effectuer cette commande.")
        .setColor("#DD2E44")
    message.channel.send(error)
}
} 

module.exports.help = {
    name: "say"
}