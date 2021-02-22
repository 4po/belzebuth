const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (message.member.hasPermission("MANAGE_MESSAGES")){
        var error = new Discord.RichEmbed()
        .setDescription("✅ Salon vidé avec succès.")
        .setColor("#77B255")
    message.channel.send(error).then(msg => msg.delete(2500));
    message.channel.fetchMessages()
    .then(function(list){
         message.channel.bulkDelete(list);
     })
    if (!message.member.hasPermission("MANAGE_MESSAGES")){
        var error = new Discord.RichEmbed()
        .setDescription("❌ Vous ne disposez pas des permissions nécessaires pour effectuer cette commande.")
        .setColor("#DD2E44")
    message.channel.send(error)
    }
}
}

module.exports.help = {
    name: "clear"
}