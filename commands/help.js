const { Command, CommandType, Argument, ArgumentType } = require('gcommands');
const { EmbedBuilder } = require('discord.js');
const User = require("../models/User");

new Command({
	name: 'help', 
	description: 'Souhrn příkazů',
	type: [CommandType.SLASH, CommandType.MESSAGE],
	run: async (ctx) => {
        const embed = new EmbedBuilder()
        .setTitle("Příkazy")
        .setDescription("Zde je seznam všech příkazů:\n\n**🖼️ Obrázky**\n/http - Ukáže fotku kočky\n/yapper - Ukáže fotku yappera\n/qrcode - Vygeneruje QR-Code s textem\n/clubcard - Ukáže clubcard do Tesca\n\n**Testy a zápisky**\n/testy - Ukáže testy, které se budou psát daný den\n/pridattest - Přidá test na daný datum\n/zapisky - Zobrazí odkazy na zápisky\n\n**🍔Jídlo**\n/obedy - Zobrazí co je dnes k obědu v ŠJ Štefánikova\n/delivery - Odesle objednavku na KFC delivery\n\n**🧰 Ostatní příkazy**\n/leaderboard - Ukáže různé leadeboardy\n/hlasovani - Vytvoří hlasování\n/hlaska - Pošle náhodnou hlášku\n/birthday - Nastaví datum narození\n/deleteallmydata - Smaže všechny data o tobě\n/info - Status bota")
        .setColor("Random")
        ctx.reply({embeds: [embed], ephemeral: true})
    }
});