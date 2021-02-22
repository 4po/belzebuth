const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const member = message.mentions.members.first();
    if (!member) {
        var error_mentions = new Discord.RichEmbed()
            .setDescription("❌ Vous devez mentionnez une personne.")
            .setColor("#DD2E44")
        message.channel.send(error_mentions)
    }else {
        var declarer_amour = new Discord.RichEmbed()
            .setDescription("<@" + message.author.id + "> viens de déclarer son amour à " + "<@" + `${member.user.id}` + "> !")
            .setThumbnail("http://www.clker.com/cliparts/5/e/e/e/11949847842049448329as_coeur_jean_victor_bal_.svg.hi.png")
            .setColor("#E61408")
        message.channel.send(declarer_amour)
    }
}

module.exports.help = {
    name: "declarer-amour"
}