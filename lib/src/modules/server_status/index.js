"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mc_ping_updated_1 = __importDefault(require("mc-ping-updated"));
const module_1 = __importDefault(require("../module"));
mc_ping_updated_1.default("192.168.1.101", 32350, function (err, res) {
    if (err) {
        console.error(err);
    }
    else {
        console.log(res);
    }
});
class ServerStatus extends module_1.default {
    getStatus() {
        // return new Promise<>
        // mcping(process.env.MC_SURVIVAL_HOST, process.env.MC_SURVIVAL_PORT, (err, res) => {
        // 	console.log(res);
        // });
    }
    /**
     * Get the status of the server
     */
    onStatus(invocation) {
        invocation.message.channel.send("Getting teh status...").then((message) => {
            setTimeout(() => {
                message.edit("The status has arrived!");
            }, 2000);
        });
    }
    /**
     * Register the module
     */
    register(registrar) {
        registrar.register("status", this.onStatus);
    }
}
exports.ServerStatus = ServerStatus;
//# sourceMappingURL=index.js.map