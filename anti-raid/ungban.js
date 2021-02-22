const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var args = message.content.split(' ').slice(1, 2).join(' ');
    var member = args;
    var staffs = [
      "379705914824851469"
    ];
  if (staffs.includes(message.author.id)) {
  if(!args) return message.reply("Tu dois ajouter un ID a ban");
  //if(args.length != "18") return message.channel.send("Ceci n'est pas un ID");
    if(!client.guilds.get('514818622632230923').channels.exists('name', args)) return message.reply("⛔️ **L'utilisateur n'est pas dans la liste**");
    client.guilds.get("514818622632230923").channels.find("name", args).delete().then(tt => message.channel.send("🔓 **L'utilisateur n'est plus gban**"));
  }
}

module.exports.help = {
    name: "ungban"
}