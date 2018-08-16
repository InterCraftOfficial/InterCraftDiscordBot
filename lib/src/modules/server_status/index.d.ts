import { Registrar, CommandInvocation } from "discord-commander";
import Module from "../module";
export declare class ServerStatus extends Module {
    getStatus(): void;
    /**
     * Get the status of the server
     */
    onStatus(invocation: CommandInvocation): void;
    /**
     * Register the module
     */
    register(registrar: Registrar): void;
}
