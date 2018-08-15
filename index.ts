import { config } from "dotenv";
import App        from "./src/app";

/**
 * Configure the application
 */
var configure = () => {
	const env = config();
	if (env.error || !env.parsed) {
		process.exit(1);
		return;
	}
	process.env = env.parsed;
};

/**
 * Run the application
 */
var run = () => {
	var app = new App();
	app.exec();
};

/**
 * Create, configure, and run the application
 */
var main = () => {
	configure();
	run();
};

// -------------------------------------------------------------------------------------------------

main();
