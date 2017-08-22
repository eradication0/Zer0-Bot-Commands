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

// little roulette game

if (message.content.startsWith("🎲")) {

	if (message.content.startsWith("🎲 odds")) {
		message.channel.send("⚫⚫⚫⚫-🔴🔴🔴🔴-🔵🔵")
		return
	}

	if (message.content.startsWith("🎲 global")) {
		let rand = Math.trunc(Math.random() * 100)
		if (rand < 69 ) {
			message.channel.send("✝ Lost! You rolled a "+ rand +". **" + db.globalpot + "** coins in Globalpot. ✝")
			return
		} else if (rand > 80) {
			message.channel.send("✝ Lost! You rolled a "+ rand +". **" + db.globalpot + "** coins in Globalpot. ✝")
			return
		} else {
			message.channel.send("🔥🔥🔥 Just snagged the global pot with a " + rand + " ROLL. Won " + db.globalpot + "coins 🔥🔥🔥")
			return
		}
		return
	}

	let rand = Math.random() * 100
	let args = message.content.split(" ")
	let pot = parseInt(args[2])

	if (args.length === 1) {
		message.channel.send("❌ **Usage:*** 🎲 <black/red/blue> <amount>")
		return
	} else if (args.length === 2) {
		message.channel.send("❌ **Usage:*** 🎲 <black/red/blue> <amount>")
		return
	}

	if (pot > db.coins) {
		message.channel.send("❌ Not enough 💰")
		return
	}

	if (db.coin === 0) {
		channel.message.send("You dont have any money :(")
		return
	}


	if (args[1] === "black") {
		test()
		return
	} else if (args[1] === "red") {
		test()
		return
	} else if (args[1] === "blue") {
		test()
		return
	} else {
		message.channel.send("❌ **Usage:*** 🎲 <black/red/blue> <amount>")
		return
	}

	function test() {
		if (rand <= 40) {
			if (args[1] === "black") {
				db.coins = db.coins + pot
				message.channel.send("⚫ you won! current balance **" + db.coins + "**")

			} else {
				db.coins = db.coins - pot
				db.globalpot = db.globalpot + pot
				message.channel.send("⚫ you lost! current balance **" + db.coins + "**")

			}
		} else if (rand <= 80) {
			if (args[1] === "red") {
				db.coins = db.coins + pot
				message.channel.send("🔴 you won! current balance **" + db.coins + "**")

			} else {
				db.coins = db.coins - pot
				db.globalpot = db.globalpot + pot
				message.channel.send("🔴 you lost! current balance **" + db.coins + "**")

			}
		} else if (rand <= 100) {
			if (args[1] === "blue") {
				db.coins = db.coins + pot * 2
				message.channel.send("🔵 you won! current balance **" + db.coins + "**")

			} else {
				db.coins = db.coins - pot
				db.globalpot = db.globalpot + pot
				message.channel.send("🔵 you lost! current balance **" + db.coins + "**")
			}
		}
		fs.writeFile(dbPath, JSON.stringify(db))
	}
}

if (message.content.startsWith("💰")) {
	message.channel.send("✅ You have " + db.coins)
}

});
