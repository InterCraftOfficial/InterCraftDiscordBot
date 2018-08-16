"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_commander_1 = require("discord-commander");
const modules = __importStar(require("./modules"));
class App {
    /**
     * Create the application
     */
    constructor() {
        /**
         * Store the created modules
         */
        this.__modules = [];
        this.__bot = new discord_commander_1.Bot();
    }
    exec() {
        console.log("Starting bot...");
        this.__bot.once("ready", () => { this.bootModules(); });
        this.__bot.login(process.env.DISCORD_CLIENT_ID);
    }
    bootModules() {
        this.__bot.register((registrar) => {
            Object.keys(modules).forEach((name) => {
                console.log("Booting module: " + name);
                const module = new modules[name]();
                registrar.register(module);
            });
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map