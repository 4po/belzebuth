const Discord = require('discord.js');
const { version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, message, args) => {
    const duration = moment.duration(client.uptime).format(" D [j], H [h], m [m], s [s]");
    var infobot = new Discord.RichEmbed()
        .setTitle("📝 Informations sur " + `${client.user.username}`)
        .addField("📋 Nom :", `${client.user.username}`, true)
        .addField("🔧 Discriminateur :", "#" + `${client.user.discriminator}`, true)
        .addField("📌 Développeur :", "</> apo#1337", true)
        .addField("<:database:504265232190013450> Serveurs :", `${client.guilds.size}`, true)
        .addField("📊 Utilisateurs :", `${client.users.size}`, true)
        .addField("👓 discord.js :", `v${version}`, true)
        .addField("🔨 node.js :", `${process.version}`, true)
        .addField("<:database_settings:504265348380360715> Mémoire :", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}` + " MB", true)
        .addField("<:Update:504265815881940994> Uptime :", `${duration}`, true)
        .setColor("#00FF00")
    message.channel.send(infobot)
}

module.exports.help = {
    name: "info-bot"
}