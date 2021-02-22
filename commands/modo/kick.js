const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if(!message.member.hasPermission("KICK_MEMBERS")) {
        var error = new Discord.RichEmbed()
        .setDescription("❌ Vous ne disposez pas des permissions nécessaires pour effectuer cette commande.")
        .setColor("#DD2E44")
    return message.channel.send(error).catch(console.error);
    message.delete()
    }
    const member = message.mentions.members.first();
    if (!member) {
        var error = new Discord.RichEmbed()
        .setDescription("❌ Merci de mentionner un utilisateur à expulsé.")
        .setColor("#DD2E44")
    return message.channel.send(error).catch(console.error);
    }
    member.kick().then(member => {
        var kick_succes = new Discord.RichEmbed()
            .setTitle("⚠️ Nouveau kick !")
            .addField("📌 Expulsé par :", message.author.username, true)
            .addField("⚡ Utilisateur kick :", `${member.user.username}`, true)
            .setColor("#FFCC4D")
       message.channel.send(kick_succes).catch(console.error);
})
}

module.exports.help = {
    name: "kick"
}