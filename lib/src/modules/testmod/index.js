"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = __importDefault(require("../module"));
class TestMod extends module_1.default {
    onRun() {
        console.log("Test module ran successfully!");
    }
    /**
     * Register the commands for this module
     */
    register(registrar) {
        registrar.register("testmod", this.onRun);
    }
}
exports.TestMod = TestMod;
//# sourceMappingURL=index.js.map