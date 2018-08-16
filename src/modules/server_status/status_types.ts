/**
 * Represents a player on a server
 */
export interface IPlayer {
	id  : string,
	name: string
}

/**
 * Represents a response fro MCPing
 */
export interface IStatusResponse {
	players: {
		max    : number,
		online : number,
		sample?: IPlayer[]
	}
}

/**
 * Represents a server status
 */
export interface IStatus {
	online : boolean,
	players: IPlayer[]
}

/**
 * Represent the status of the server ping requests
 */
export interface IFetchedServerStatus {
	[key: string]: IStatus | null
}

/**
 * Represents the server status callback
 */
export type ServerStatusCallback = (servers: IFetchedServerStatus) => void;
