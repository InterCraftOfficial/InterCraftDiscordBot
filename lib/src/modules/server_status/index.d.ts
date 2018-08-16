import { Registrar, CommandInvocation } from "discord-commander";
import { IServer, IServerList } from "../../servers";
import Module from "../module";
import * as Types from "./status_types";
export declare class ServerStatus extends Module {
    /**
     * Get the status of a Minecraft server
     */
    ping(server: IServer): Promise<Types.IStatus>;
    /**
     * Get the status of the given server list
     */
    getStatus(servers: IServerList, callback: Types.ServerStatusCallback): Types.IFetchedServerStatus;
    /**
     * Format the given server status' into a nice string
     */
    formatServerStatus(servers: Types.IFetchedServerStatus): string;
    /**
     * Get the status of the server
     */
    onStatus(invocation: CommandInvocation): void;
    /**
     * Register the module
     */
    register(registrar: Registrar): void;
}
