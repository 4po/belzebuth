const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var util = require("util");
    let arg = message.content.split(" ").slice(1);   
    let code = arg.join(' ');
      if (message.author.id != '379705914824851469') return;
        try {
      let ev = eval(code)
                    let str = util.inspect(ev, {
                        depth: 1
                    })
                     str = `${str.replace(new RegExp(`NDcwNjc2MjAyNTA0MzIzMDg0.DrCblw.8N4yMUiThZ4qTfVsNBx-R0Xmq0g`, "g"), "nop?")}`;
                    if(str.length > 1800) {
                        str = str.substr(0, 1800)
                        str = str + "..."
                    }
                    message.delete(); 
        message.channel.send("", { embed: { 
          color: 2551400,      
      fields: [{        
        name: '**Input**',     
          value: '\`\`\`' + code + '\`\`\`'         
    },{     
          name: '**Output**', 
              value: '\`\`\`' + str + '\`\`\`'  
            }], 
          footer: {     
        text: ``    }     }});} catch (err) {   message.react("❌");
    message.channel.send("", { embed: { 
          color: 2551400,      
      fields: [{        
        name: '**Input**',     
          value: '\`\`\`' + code + '\`\`\`'         
    },{     
          name: '**Output**', 
              value: '\`\`\`' + err + '\`\`\`'  
            }], 
          footer: {     
        text: ``    }     }});    } }

module.exports.help = {
    name: "eval"
}