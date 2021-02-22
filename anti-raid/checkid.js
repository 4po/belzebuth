const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var args = message.content.split(' ').slice(1, 2).join(' ');
    var member = args;
    message.delete()
    if(!args) {
        var error = new Discord.RichEmbed()
            .setDescription("❌ Vous devez écrire un ID pour vérifier si celui-ci se trouve dans la blacklist.")
            .setColor("#DD2E44")
        message.channel.send(error)
    }else {
  if(client.guilds.get('506400934411370497').channels.exists('name', args)) {
      var blacklist_on = new Discord.RichEmbed()
            .setDescription("❌ L'ID " + "**" + args + "**" + " se trouve actuellement dans la blacklist. Pour plus de renseignement, allez dans le salon #blacklist du serveur officiel.")
            .setColor("#DD2E44")
      message.channel.send(blacklist_on)
  } else {
      var blacklist_off = new Discord.RichEmbed()
            .setDescription("✅ L'ID " + "**" + args + "**" +  " n'est pas dans la blacklist.")
            .setColor("#77B255")
      message.channel.send(blacklist_off)
}}}