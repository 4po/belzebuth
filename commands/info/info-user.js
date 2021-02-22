const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const member = message.mentions.members.first();
    if(message.mentions.users.size === 0) {
        var error = new Discord.RichEmbed()
            .setTitle("❌ Merci de mentionner une personne. Si vous souhaitez obtenir des informations sur vous, mentionnez-vous.")
            .setColor("#DD2E44")
    message.channel.send(error)
    }else {
        if (member.user.bot) {
            var bot = "Oui ✅";
        } else if (!member.user.bot) {
            var bot = "Non ❌";
        } else {
            var bot = "Erreur";
        } 
        if (member.user.bot) {
        if (member.user.bot = "online") {
            var status = "En ligne";
        }
        if (member.user.bot = "offline") {
            var status = "Hors-ligne";
        }
        if (member.user.bot = "idle") {
            var status = "Absent";
        }
        if (member.user.bot = "dnd") {
            var status = "Ne pas déranger";
        }
    }
    var users_info = new Discord.RichEmbed()
        .setAuthor(member.user.tag, member.user.avatarURL)
        .setThumbnail(member.avatarURL)
        .addField("⭐ __Nom complet :__", member.user.tag, true)
        .addField("🔰 __Discriminateur :__", "#" + member.user.discriminator, true)
        .addField("📝 __ID :__", member.user.id, true)
        .addField("📅 __Création du compte :__", member.user.createdAt, true)
        .addField(":robot: __Bot :__", bot, true)
        .addField("🎮 Joue à :", member.user.presence.game, true)
        .addField("💻 Statut :", member.user.presence.status, true)
        .setFooter(`Demandé par ${message.author.tag}`, message.author.avatarURL)
        .setColor("#77B255")
message.channel.send(users_info)
    }
}

module.exports.help = {
    name: "info-user"
}