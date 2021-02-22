const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    var user = message.mentions.users.first() || message.author;
    const staffs = ["379705914824851469","297688808374272001","296585239822860288"];
    if (!staffs.includes(user.id)) {
      return message.channel.send(`:x: L\'utilisateur/trice ${user.username} ne fait pas parti(e) de nos équipes.`)
    };
    message.channel.send(`:white_check_mark: ${user.username} fait bien parti(e) de nos équipes.`);
  }
  
  module.exports.help = {
    name: "verif-staff"
  }