const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) {
        var error = new Discord.RichEmbed()
        .setDescription("❌ Vous ne disposez pas des permissions nécessaires pour effectuer cette commande.")
        .setColor("#DD2E44")
    return message.channel.send(error).catch(console.error);
    message.delete()
    }
    const member = message.mentions.members.first();
    if (!member) {
        var error = new Discord.RichEmbed()
        .setDescription("❌ Merci de mentionner un utilisateur.")
        .setColor("#DD2E44")
    return message.channel.send(error)
    }
    member.ban().then(member => {
        var ban_succes = new Discord.RichEmbed()
        .setTitle("⚠️ Nouveau ban !")
        .addField("📌 Banni par :", message.author.username, true)
        .addField("⚡ Utilisateur banni :", `${member.user.username}`, true)
        .setColor("#FFCC4D")
   message.channel.send(ban_succes).catch(console.error);
})
}

module.exports.help = {
    name: "ban"
}