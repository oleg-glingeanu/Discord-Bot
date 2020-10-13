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

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } 
    else if(command === 'uwu'){
        client.commands.get('uwu').execute(message, args);
    }
    else if(command === n,"%"){
        var random_number = Math.floor(Math.random() * 3);
        if(random_number == 2){
            message.channel.send('negative.');
        }else if(random_number == 1){
            message.channel.send('affirmative.');
    }}

})

client.login('NzY1NjAxNDc2MzE1NzA5NDUx.X4XL8A.s5s02QxSK7YODcjTEAH980UvK-g');
