const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./db.json')
const db = low(adapter)



exports.run = (client, message, args) => {


    // Variables
    var msgauthor = message.author.id
    var servauthor = message.guild.id

    // Récupération des donnés
    if (!db.get("credits").find({ user: msgauthor, serveur: servauthor }).value()) 
    db.get("credits").push({ user: msgauthor, serveur: servauthor,  credits: 1 }).write()
    var usercreditsdb = db.get("credits").filter({ user: msgauthor, serveur: servauthor,  }).find('credits').value()
    var usercredits = Object.values(usercreditsdb)

    const profil_embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL)
        .addField("💳 __Crédits__", usercredits[2] + " crédits", true)
        .setColor("#FFAC33")
    message.channel.send(profil_embed)
}

module.exports.help = {
    name: "profil"
}