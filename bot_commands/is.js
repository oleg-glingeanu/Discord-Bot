module.exports = {
    
    name: 'is',
    description: "This is a is command",
    execute(message, args){
            var random_num = Math.floor(Math.random() * 100);
            var random_number = Math.floor(Math.random() * 2);
        if(random_number == 0){
            message.channel.send('No');
        }else if(random_number == 1){
            message.channel.send('Negative.');
        }else if(random_number == 2){
            message.channel.send('Affirmative.');
        }
}}
