module.exports = {
    
    name: 'is',
    description: "This is a is command",
    execute(message, args){
            var random_number = Math.floor(Math.random() * 3);
        if(random_number == 2){
            message.channel.send('negative.');
        }else if(random_number == 1){
            message.channel.send('affirmative.');
    }}
}


