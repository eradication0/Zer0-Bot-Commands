// this is a list for code you can use in your main file

// log stuff in a specific channel and server
discordLog = () => {
	bot.channels.get('CHANNEL ID').send('Content goes here')
}

// set the playing status to something when you start the bot
bot.on('ready', () => {
    bot.user.setGame("Bot is Back!")
})

// do something if the bot is mentioned
if (message.isMentioned(bot.user.id)) {
	message.channel.send('You mentioned me, try the ``help`` command.')
}

// dont let the bot listen to himself
if (message.author.id === bot.user.id) return

// dont let the bot listen to other bots
if (message.author.bot) return

// dont let the bot listen to messages without or the wrong prefix
if (!message.content.startsWith(settings.prefix)) return

// do something when a new user joins the server
bot.on('guildMemberAdd', member => {
	member.guild.defaultChannel.send('Welcome to the server!')
})
