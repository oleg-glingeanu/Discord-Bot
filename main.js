const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs =  require('fs');

var str = "iss";

var n = str.startsWith("is");

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./bot_commands/').filter(file => file.endsWith('.js'))
for (const file of commandFiles){
    const command = require(`./bot_commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready',() => {
    console.log('idiot_bot is online !');
    console.log(Math.round(Math.random() * 2));
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ + /);
    const command = args.shift().toLowerCase();

    if(command === "is","%"){
        client.commands.get('is').execute(message, args);
    }
    else if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } 
    else if(command === 'uwu'){
        client.commands.get('uwu').execute(message, args);
    }
    else if(command === 'help'){
        client.commands.get('help').execute(message, args);
    }
})

client.login('');
