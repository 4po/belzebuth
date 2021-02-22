const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var report = new Discord.RichEmbed()
        .setTitle("🚨 | __Signaler un raid__ !")
        .addField(":one: __Étape 1__ :", "Rejoignez notre serveur officiel en cliquant [ici](https://discord.gg/rcCwPUf)")
        .addField(":two: __Étape 2__ :", "Vous devrez vous rendre dans le salon textuel suivant : 『💼』signalement")
        .addField(":three: __Étape 3__ :", "Rédiger votre signalement en suivant le modèle (disponible dans les messages épinglés).")
        .addField(":four: __Étape 4__", "Envoyez votre demande et attendez la réponse de nos équipes.")
        .setColor("#E81224")
    message.channel.send(report)
}

module.exports.help = {
    name: "report"
}