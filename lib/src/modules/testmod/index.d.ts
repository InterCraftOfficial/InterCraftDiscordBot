import { Registrar } from "discord-commander";
import Module from "../module";
export declare class TestMod extends Module {
    onRun(): void;
    /**
     * Register the commands for this module
     */
    register(registrar: Registrar): void;
}
