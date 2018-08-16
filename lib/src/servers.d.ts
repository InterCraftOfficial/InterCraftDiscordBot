/**
 * Represents a Minecraft server
 */
export interface IServer {
    host: string;
    port: number;
}
/**
 * Represents a list of Minecraft servers
 */
export interface IServerList {
    [key: string]: IServer;
}
/**
 * Export the list of all Minecraft servers
 */
export declare const SERVERS: IServerList;
