"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonfile_1 = require("jsonfile");
/**
 * Export the list of all Minecraft servers
 */
exports.SERVERS = (() => {
    let servers = {};
    jsonfile_1.readFileSync("servers.json").forEach((server) => {
        servers[server.name] = {
            host: server.host,
            port: server.port
        };
    });
    return servers;
})();
//# sourceMappingURL=servers.js.map