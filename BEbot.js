# BEbot

const Discord = require("discord.js");
const  client = new Discord.Client();
const config = require("./config.json");


client.login(config.token);


client.on("ready", () => {
   console.log("Estoy listo!");

   client.user.setPresence( {
       status: "online",
       game: {
           name: "Bright Edges",
           type: "PLAYING"
       }
   } );
});




var prefix = config.prefix;

client.on("message", (message) => {
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "hola")) {
    message.channel.send("Hola que tal?");
  }
});




///lista de items
client.on("message", (message) => {
  if (message.content.startsWith(prefix + "day")) {

    let rollfish = Math.floor(Math.random() * 7) +1;
    if(rollfish === 1){
        message.channel.send('¡Felicidades!, ' + message.author.username + ' ¡has encontrado un :carp:');

    }else if(rollfish === 2){
        message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: :asp:');

    }else {

        message.channel.send('Felicitaciones, ' + message.author.username + '! pescaste: :bluegill:');
    }
}
});
///





client.on("message", (message) => {
if(message.content.startsWith(prefix + 'help')){

    message.channel.send('**COMANDOS DE MYBOT**\n```\n'+
                        '-> '+prefix+'ping           :: Comprueba la latencia del bot y de tus mensajes.\n'+
                        '-> '+prefix+'avatar <@user> :: Muestra el avatar de un usuario.\n'+
                        '-> '+prefix+'decir          :: Hace que el bot diga un mensaje.\n'+
                        '-> '+prefix+'user <@user>   :: Muestra información sobre un usuario mencioando.\n'+
                        '-> '+prefix+'server         :: Muestra información de un servidor determinado.\n'+
                        '-> '+prefix+'8ball          :: El bot respondera a tus preguntas.\n'+
                        '-> '+prefix+'ban <@user>    :: Banear a un usuario del servidor incluye razon.\n'+
                        '-> '+prefix+'kick <@user>   :: Patear a un usuario del servidor incluye razon.\n'+
                        '-> '+prefix+'hola           :: Retorna un saludo como mensaje.\n```\n\n');

  }
});
