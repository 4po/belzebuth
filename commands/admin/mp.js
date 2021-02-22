const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (message.member.hasPermission("MANAGE_MESSAGES")){
        let args = message.content.split(" ").slice(2);
        let thingToEcho = args.join(" ")
        var member = message.mentions.members.first();
        if (!member) {
            var error = new Discord.RichEmbed()
            .setDescription("❌ Merci de mentionner un utilisateur pour envoyer un message privé.")
            .setColor("#DD2E44")
        return message.channel.send(error)
        }
        var mp = new Discord.RichEmbed()
            .setTitle("📌 Vous avez reçu un message privé du serveur " + message.guild.name)
            .addField("🔨 Envoyé par :", "<@" + message.author.id + ">", true)
            .addField("📋 Contenu du message :", thingToEcho, true)
            .setColor("#DA3B01")
        member.send(mp)
        message.delete()
        var mp_succes = new Discord.RichEmbed()
            .setTitle("📌 Un nouveau message privé viens d'être envoyé !")
            .addField("🔨 Envoyé par :", "<@" + message.author.id + ">", true)
            .addField("⚡ Destinataire :", "<@" + member.id + ">", true)
            .setColor("#DA3B01")
        message.channel.send(mp_succes)
    }
    if (!message.member.hasPermission("MANAGE_MESSAGES")){
        var error_permissions = new Discord.RichEmbed()
        .setDescription("❌ Vous ne disposez pas des permissions nécessaires pour envoyer des messages privés.")
        .setColor("#DD2E44")
    message.channel.send(error_permissions)
    }
}

module.exports.help = {
    name: "mp"
}