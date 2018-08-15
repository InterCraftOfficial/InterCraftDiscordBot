import { Registrar } from "discord-commander";
import Module        from "../module";

export class TestMod extends Module
{
	onRun () {
		console.log("Test module ran successfully!");
	}

	/**
	 * Register the commands for this module
	 */
	register (registrar: Registrar) {
		registrar.register("testmod", this.onRun);
	}
}
