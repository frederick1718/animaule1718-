const Discord = require('discord.js');
const BoT = new Discord.Client();

BoT.on('ready', async()=> {
	console.log(`${BoT.user.name} est prêt!`);
});

BoT.login(process.env.token);
process.on('unhandledRejection', async(e)=> {console.log(`Uncaught Promise Rejection:\n${e}`);});