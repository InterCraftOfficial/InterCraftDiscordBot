"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const async_1 = __importDefault(require("async"));
const mc_ping_updated_1 = __importDefault(require("mc-ping-updated"));
const servers_1 = require("../../servers");
const module_1 = __importDefault(require("../module"));
class ServerStatus extends module_1.default {
    /**
     * Get the status of a Minecraft server
     */
    ping(server) {
        return new Promise((resolve) => {
            mc_ping_updated_1.default(server.host, server.port, (err, response) => {
                var status = {
                    online: !Boolean(err),
                    players: !Boolean(err) ? response.players.sample || [] : []
                };
                resolve(status);
            });
        });
    }
    /**
     * Get the status of the given server list
     */
    getStatus(servers, callback) {
        var status = {};
        for (var name of Object.keys(servers_1.SERVERS)) {
            status[name] = null;
        }
        var functions = [];
        for (let name in servers) {
            functions.push((cb) => {
                this.ping(servers[name]).then((response) => {
                    status[name] = response;
                    callback(status);
                    cb();
                });
            });
        }
        async_1.default.parallel(functions);
        return status;
    }
    /**
     * Format the given server status' into a nice string
     */
    formatServerStatus(servers) {
        var status = "";
        for (var name in servers) {
            let server = servers[name];
            if (server == null) {
                status += `\n${name} Status: fetching...\n`;
            }
            else {
                status += `\n${name} Status: ` + (server.online ? "Online" : "Offline") + "\n";
                if (server.online) {
                    status += `\tPlayers Online: ${server.players.length}\n`;
                    for (var i in server.players)
                        status += `\t\t- ${server.players[i].name}\n`;
                }
            }
        }
        return status.trim();
    }
    /**
     * Get the status of the server
     */
    onStatus(invocation) {
        var initial = {};
        for (var name of Object.keys(servers_1.SERVERS)) {
            initial[name] = null;
        }
        invocation.message.channel.send(this.formatServerStatus(initial)).then((message) => {
            this.getStatus(servers_1.SERVERS, (servers) => {
                message.edit(this.formatServerStatus(servers));
            });
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