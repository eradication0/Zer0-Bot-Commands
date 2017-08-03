exports.run = function(discord, bot, message, args) {

	// adds or removes a specific role on a specific server

	// define the role and server
	let RoleId = "ROLE ID HERE!";
	let ServerId = "SERVER ID HERE!"

	// make sure the role exists on the server
	if (message.member.guild.id === ServerId) {

		// test if the user already does have the role
		if (message.member.roles.get(RoleId)) {

			// removes the role
			message.member.removeRole(RoleId)
			message.channel.send('Role removed');
		} else {

			// adds the role
			message.member.addRole(RoleId)
			message.channel.send('Role added');
		}
	} else {
		message.channel.send('Role not found on this server')

	}



}
