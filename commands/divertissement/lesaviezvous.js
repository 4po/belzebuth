const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        var error = new Discord.RichEmbed()
            .setDescription("❌ Vous ne disposez pas des permissions nécessaires pour effectuer cette commande.")
            .setColor("DD2E44")
        message.channel.send(error)
    }
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
        let args = message.content.split(" ").slice(1);
        let lesaviezvoustext = args.join(" ")
        if (!args[0]) {
            var error_content = new Discord.RichEmbed()
                .setDescription("❌ Merci de mettre un contenu pour un effectuer un Le Saviez-vous.")
                .setColor("#DD2E44")
            message.channel.send(error_content)
        }else {
        var lesaviezvous = new Discord.RichEmbed()
            .setTitle("🌍 LE SAVIEZ-VOUS ?")
            .setThumbnail("https://i0.wp.com/www.rockstarmag.fr/wp-content/uploads/2014/02/logo-le-saviez-vous.png")
            .setDescription(lesaviezvoustext)
            .setFooter(`Proposé par ${message.author.tag}`, message.author.avatarURL)
            .setColor("#0078D7")
        message.channel.send(lesaviezvous)
        .then(function (message){
            message.react("✅")
            message.react("❌")
        }).catch(function(){

        });
        message.delete()
    }
}
}
    
module.exports.help = {
    name: "lesaviezvous"
}