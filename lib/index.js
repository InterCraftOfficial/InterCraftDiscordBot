"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const app_1 = __importDefault(require("./src/app"));
/**
 * Configure the application
 */
var configure = () => {
    const env = dotenv_1.config();
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
    var app = new app_1.default();
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
//# sourceMappingURL=index.js.map