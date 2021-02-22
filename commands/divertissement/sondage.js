const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    var error = new Discord.RichEmbed()
        .setDescription("❌ Vous ne disposez pas des permissions nécessaires pour effectuer cette commande.")
        .setColor("#DD2E44")
    message.channel.send(error)
    }
    if (message.member.hasPermission("MANAGE_MESSAGES")){
    let arg = message.content.split(" ").slice(1);
    let thingToEcho = arg.join(" ")
    if (!arg[0]) {
        var error_content = new Discord.RichEmbed()
            .setDescription("❌ Merci de mettre du contenu au sondage.")
            .setColor("#DD2E44")
        message.channel.send(error_content)
    }
    var sondage = new Discord.RichEmbed()
        .setTitle("📊 __Sondage__ :")
        .addField(thingToEcho, "Répondez dès maintenant au sondage avec <:verified:513251790830043147> ou <:noverified:513251790465007627>!")
        .setColor("#00BFFF")
    message.channel.send(sondage)
        .then(function (message){
            message.react("513251790830043147")
            message.react("513251790465007627")
        }).catch(function(){

        });
        message.delete()
}
}

module.exports.help = {
    name: "sondage"
}