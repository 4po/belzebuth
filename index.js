const Discord = require("discord.js");
const client = new Discord.Client();
const Enmap = require("enmap");
const fs = require("fs");

const config = require("./config.json");
client.config = config;

client.on('ready', () => {
  console.log(`${client.user.username} starting...`);
  console.log(`Serving ${client.guilds.size} guilds.`);
  console.log(`${client.users.size} users`);
  console.log('Développé par Emmanuel');

  const activities = [
      ".help | Speed",
      `.help | ${client.guilds.size} serveurs`,
      `.help | ${client.users.size} users`
  ];
  client.setInterval(() => {
      const index = Math.floor(Math.random() * activities.length);
      client.user.setActivity(activities[index], {
          type: "PLAYING",
          url: "http://twitch.tv/client"
      });
  }, 15000);
});


client.login(config.token);

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});
 
client.commands = new Enmap();
 
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

client.commands = new Enmap();
 
fs.readdir("./commands/admin/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/admin/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

client.commands = new Enmap();
 
fs.readdir("./commands/modo/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/modo/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

client.commands = new Enmap();
 
fs.readdir("./commands/info/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/info/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

client.commands = new Enmap();
 
fs.readdir("./commands/utilitaires/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/utilitaires/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

client.commands = new Enmap();
 
fs.readdir("./commands/divertissement/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/divertissement/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

client.commands = new Enmap();

fs.readdir("./commands/images", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/images/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

client.commands = new Enmap();
 
fs.readdir("./commands/color/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/color/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

client.commands = new Enmap();
 
fs.readdir("./commands/fun/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/fun/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

client.commands = new Enmap();
 
fs.readdir("./commands/anti-raid/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/anti-raid/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/economy/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/economy/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});



// Système d'anti-pub
client.on('message', function (message) {
    const pub = [
      "discord.me",
      "discord.io",
      "discord.gg",
      "invite.me"
    ];

  if(pub.some(word => message.content.includes(word))) {
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
      return;
    }
      message.delete()
      var pub_detect = new Discord.RichEmbed()
        .setTitle("⚠️ Une publicité viens d'être détecté automatiquement!")
        .addField("⚡__Utilisateur__ :", "<@" + message.author.id + ">")
        .addField("🔒 __Statut de la pub__ :", "Automatiquement supprimé.")
        .addField("📌 __Information__ :", "Si vous faites parti(e) de l'équipe, demandez à l'un de vos administrateurs de vous mettre la permission de gérer les messages.")
        .setColor("#FFCC4D")
        message.channel.send(pub_detect)
      }
    })

  // Détection d'une personne gban puis ban automatique
client.on("guildMemberAdd", member => {
  if(client.guilds.get('514818622632230923').channels.exists('name', member.user.id)) { 
    member.ban().then
    member.send("__**🔒 Vous avez été banni du serveur que vous avez rejoint à l'instant car vous êtes dans la blacklist de Speed.**__")
    }else {
      return;
    }
  })

  client.on('guildCreate', guild => {
    const embed = new Discord.RichEmbed()
        .setDescription(`📌 Merci à **${guild.name}** d'avoir ajouté Speed.`)
        .addField("📋 __Nom du serveur__", guild.name, true)
        .addField("📊 __Nombre de membres__ :", guild.memberCount, true)
        .addField("💻 __Nombre de salons__ :", guild.channels.size, true)
        .addField("👤 __Propriétaire__ :", guild.owner, true)
        .addField("🌍 __Région du serveur__ :", guild.region, true)
        .addField("📝 __ID du serveur__ :", guild.id, true)
        .setColor("#F03A17")
      client.channels.get('515907240129986583').send(embed);
});

client.on('guildCreate', guild => {
  const activities = [
    ".help | Speed",
    `.help | ${client.guilds.size} serveurs`,
    `.help | ${client.users.size} users`
];
client.setInterval(() => {
    const index = Math.floor(Math.random() * activities.length);
    client.user.setActivity(activities[index], {
        type: "PLAYING",
        url: "http://twitch.tv/client"
    });
}, 15000);
});
