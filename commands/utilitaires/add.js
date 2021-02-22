const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var add = new Discord.RichEmbed()
        .setTitle("💻 | Ajouter Speed")
        .addField("Nous offrons la possibilité à nos utilisateurs d'ajouter Speed sur votre serveur. Nous vous remercions d'avance si vous le faites. Cela permettra de motiver encore plus nos équipes.", "Speed est un bot discord rapide, fluide et performant.")
        .addField("__Avec permissions personnalisés :__", "Vous pouvez ajoutez notre bot avec les permissions que vous souhaitez.. [[Inviter]](https://discordapp.com/oauth2/authorize?client_id=514788234941825034&scope=bot&permissions=1342319703)")
        .setColor("#FE9A2E")
        message.channel.send(add)
}

module.exports.help = {
    name: "add"
}