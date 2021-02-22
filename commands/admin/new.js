const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
        var error_permissions = new Discord.RichEmbed()
            .setDescription("❌ Vous devez disposez des permissions `Administrateur` pour effectuer cette commande.")
            .setColor("#DD2E44")
        message.channel.send(error_permissions)
    }
    if (message.member.hasPermission("ADMINISTRATOR")) {
        let arg = message.content.split(" ").slice(1);
        let newtext = arg.join(" ")
        if (!arg[0]) {
            var error_content = new Discord.RichEmbed()
                .setDescription("❌ Vous devez mettre un contenu pour effectuer cette commande.")
                .setColor("#DD2E44")
            message.channel.send(error_content)
        }else {
        var new_content = new Discord.RichEmbed()
            .setTitle("🔰 __NOUVEAUTÉS :__")
            .setDescription(newtext)
            .setColor("#FFC83D")
        message.channel.send(new_content)
        message.delete()
    }
}
}

module.exports.help = {
    name: "new"
}