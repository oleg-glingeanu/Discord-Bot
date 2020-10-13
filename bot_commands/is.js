module.exports = {
    
    name: 'is',
    description: "This is a is command",
    execute(message, args){
            var random_num = Math.floor(Math.random() * 100);
            var random_number = Math.floor(Math.random() * 5);
        if(random_number == 0){
            message.channel.send('No xd');
        }else if(random_number == 1){
            message.channel.send('Negative.');
        }else if(random_number == 2){
            message.channel.send('Affirmative.');
        }else if(random_number == 3){
            message.channel.send('Negative, the person who asked is xd');
        }else if(random_number == 4){
            message.channel.send('Negative , only 20%');
        }else if(random_number == 5){
            message.channel.send('He is 200% straight');
        }
}
}


