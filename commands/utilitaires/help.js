const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var help = new Discord.RichEmbed()
        .setTitle("🌐 Listes des commandes disponibles:")
        .addField("⚡ • __Administration__ <:online:509825962477879306>", "`say`, `mp`, `info`, `maj`, `del-channel`, `new`")
        .addField("⚠️ • __Modération__ <:online:509825962477879306>", "`clear`, `ban`, `kick`")
        .addField("📌 • __Informations__ <:online:509825962477879306>", "`infodiscord`, `info-bot`, `info-channel`, `info-user`")
        .addField("🔨 • __Utilitaires__ <:online:509825962477879306>", "`test`, `add`, `avatar`, `verif-staff`, `suggestion`, `bienvenue`")
        .addField("🎮 • __Divertissement__ <:online:509825962477879306>", "`sondage`,  `debat`, `lesaviezvous`, `vraioufaux`")
        .addField("🖼️ • __Images__ <:online:509825962477879306>", "`blurple`, `darkgreen`, `blur`, `convinvert`, `convolute`, `darkred`, `discord`, `displace`, `fire`, `french`, `ghost`, `grayscale`, `invert`, `green`, `orangly`, `pixelate`, `posterize`, `rainbow`, `red`, `reddit`, `rgb`, `sepia`, `spotify`, `steam`, `time`, `triggered`, `triggeredinvert`, `twitter`, `twitch`")
        .addField("🔷 • __Couleurs__ <:online:509825962477879306>", "`Syntaxe : color-[Marquez votrecouleur en anglais]`")
        .addField("🎬 • __Fun__ <:online:509825962477879306>", "`calin`, `frapper`, `bisous`, `fakeban`, `fakemute`, `declarer-amitie`, `declarer-amour`, `anniversaire`")
        .addField("🚨 • __Anti-raid__ <:dnb:509825961902997535>", "`gban`, `ungban`, `checkid`, `report`")
        .addField("<:economy:515922530125611049> • __Économie__ <:dnb:509825961902997535>", "`profil`, `desc`")
        .setThumbnail(`${client.user.avatarURL}`)
        .setColor("#00FF00")
    message.channel.send(help)
}

module.exports.help = {
    name: "help"
}
