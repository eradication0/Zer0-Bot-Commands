exports.run = function(discord, bot, message, args) {

	// joins the voice channel the user is in

	if (bot.channels.get(message.member.voiceChannelID)) {
		bot.channels.get(message.member.voiceChannelID).join()
	} else {
		message.channel.sendMessage('❌ You are not in a voice channel.');
	}

}
