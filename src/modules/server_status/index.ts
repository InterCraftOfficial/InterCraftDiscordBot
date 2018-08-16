import async         from "async";
import mcping        from "mc-ping-updated";
import { Message }   from "discord.js";
import {
	Registrar,
	CommandInvocation
}                    from "discord-commander";
import {
	IServer,
	IServerList,
	SERVERS
}                    from "../../servers";
import Module        from "../module";
import * as Types    from "./status_types";

export class ServerStatus extends Module
{
	/**
	 * Get the status of a Minecraft server
	 */
	ping (server: IServer) {
		return new Promise<Types.IStatus>((resolve) => {
			mcping(server.host, server.port, (err, response: Types.IStatusResponse) => {
				var status: Types.IStatus = {
					online: !Boolean(err),
					players: !Boolean(err) ? response.players.sample || [] : []
				};
				resolve(status);
			});
		});
	}

	/**
	 * Get the status of the given server list
	 */
	getStatus (servers: IServerList, callback: Types.ServerStatusCallback) {
		var status: Types.IFetchedServerStatus = {};
		for (var name of Object.keys(SERVERS)) {
			status[name] = null;
		}
		var functions = [];
		for (let name in servers) {
			functions.push((cb) => {
				this.ping(servers[name]).then((response: Types.IStatus) => {
					status[name] = response;
					callback(status);
					cb();
				});
			});
		}
		async.parallel(functions);
		return status;
	}

	/**
	 * Format the given server status' into a nice string
	 */
	formatServerStatus (servers: Types.IFetchedServerStatus) {
		var status = "";
		for (var name in servers) {
			let server = servers[name];
			if (server == null) {
				status += `\n${name} Status: fetching...\n`;
			} else {
				status += `\n${name} Status: ` + (server.online ? "Online" : "Offline") + "\n";
				if (server.online) {
					status += `\tPlayers Online: ${server.players.length}\n`;
					for (var i in server.players)
						status += `\t\t- ${server.players[i].name}\n`;
				}
			}
		}
		return status.trim();
	}

	/**
	 * Get the status of the server
	 */
	onStatus (invocation: CommandInvocation) {
		var initial: Types.IFetchedServerStatus = {};
		for (var name of Object.keys(SERVERS)) {
			initial[name] = null;
		}
		invocation.message.channel.send(
			this.formatServerStatus(initial)
		).then((message: Message) => {
			this.getStatus(SERVERS, (servers: Types.IFetchedServerStatus) => {
				message.edit(this.formatServerStatus(servers));
			})
		});
	}

	/**
	 * Register the module
	 */
	register (registrar: Registrar) {
		registrar.register("status", this.onStatus);
	}
}
