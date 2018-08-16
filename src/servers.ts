import { readFileSync } from "jsonfile";

/**
 * Represents a Minecraft server
 */
export interface IServer {
	host: string,
	port: number
}

/**
 * Represents a list of Minecraft servers
 */
export interface IServerList {
	[key: string]: IServer
}

/**
 * Represents a raw server configuration
 */
interface IServerRaw {
	name: string,
	host: string,
	port: number
}

/**
 * Export the list of all Minecraft servers
 */
export const SERVERS: IServerList = (() => {
	let servers: IServerList = {};
	(<object[]>readFileSync("servers.json")).forEach((server: IServerRaw) => {
		servers[server.name] = {
			host: server.host,
			port: server.port
		};
	});
	return servers;
})();
