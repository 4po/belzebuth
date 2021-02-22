const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        var error_permissions = new Discord.RichEmbed()
            .setDescription("❌ Vous ne disposez pas des permissions nécessaires pour effectuer cette commande.")
            .setColor("#DD2E44")
        message.channel.send(error_permissions)
    }
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
    let arg = message.content.split(" ").slice(1);
    let vraioufauxtext = arg.join(" ")
    if (!arg[0]) {
        var error_content = new Discord.RichEmbed()
            .setDescription("❌ Vous n'avez mis aucun contenu pour cette commande.")
            .setColor("#DD2E44")
        message.channel.send(error_content)
    }else {
    var vraioufaux = new Discord.RichEmbed()
        .setTitle("❓ VRAI OU FAUX : ")
        .setThumbnail("http://fr.pluzzle.me/imgquizz/icon/z8hjl.png")
        .addField(vraioufauxtext, "Répondre avec <:valide:513251791253667840> ou <:refuse:513251790876049419> !")
        .setFooter(`Proposé par ${message.author.tag}`, message.author.avatarURL)
        .setColor("#BE1931")
    message.channel.send(vraioufaux)
    .then(function (message){
        message.react("513251791253667840")
        message.react("513251790876049419")
    }).catch(function(){

    });
    message.delete()
}
}
}

module.exports.help = {
    name: "vraioufaux"
}