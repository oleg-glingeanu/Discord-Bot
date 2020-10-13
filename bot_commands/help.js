module.exports = {
    
    name: 'help',
    description: "This is a help command",
    execute(message, args){
        message.channel.send(htmlString);
    }
}

const htmlString = `Help Menu
- is
-ping
-uwu
`