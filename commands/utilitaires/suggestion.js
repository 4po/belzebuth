const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let arg = message.content.split(" ").slice(1);
    let suggestion_text = arg.join(" ")
    if (!arg[0]) {
        var error_content = new Discord.RichEmbed()
            .setDescription("❌ Merci de mettre un contenu à votre suggestion.")
            .setColor("#DD2E44")
        message.channel.send(error_content)
    }else {
    var suggestion = new Discord.RichEmbed()
        .setTitle("▶️ | __Nouvelle suggestion__")
        .addField("📝 __Contenu de la suggestion :__", suggestion_text)
        .addField("📢 __Informations :__", "Vous pouvez réagir à cette suggestion grâce aux réaction ✅ ou ❌ dès maintenant !")
        .setFooter(`Proposée par ${message.author.tag}`, message.author.avatarURL)
        .setColor("#363940")
    message.channel.send(suggestion)
    .then(function (message) {
        message.react("✅")
        message.react("❌")
    }).catch(function() {

    });
    message.delete()
}
}

module.exports.help = {
    name: "suggestion"
}