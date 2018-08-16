import { Bot, Registrar } from "discord-commander";
import Module             from "./modules/module";
import * as modules       from "./modules";

class App
{
	/**
	 * The Discord bot instance
	 */
	private __bot: Bot;

	/**
	 * Store the created modules
	 */
	private __modules: Module[] = [];

	/**
	 * Create the application
	 */
	constructor () {
		this.__bot = new Bot();
	}

	exec () {
		console.log("Starting bot...");
		this.__bot.once("ready", () => { this.bootModules(); });
		this.__bot.login(process.env.DISCORD_CLIENT_ID);
	}

	bootModules () {
		this.__bot.register((registrar: Registrar) => {
			Object.keys(modules).forEach((name: string) => {
				console.log("Booting module: " + name);
				const module: Module = new (<typeof Module>modules[name])();
				registrar.register(module);
			});
		});
	}
}

export default App;
