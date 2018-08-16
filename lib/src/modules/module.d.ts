import { Common, Registrar } from "discord-commander";
declare class Module implements Common.ICommandRegistrar {
    register(registrar: Registrar): void;
}
export default Module;
