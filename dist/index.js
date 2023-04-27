"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const guilded_js_1 = require("guilded.js");
const revolt_js_1 = require("revolt.js");
const config_json_1 = require("./config.json");
const config_json_2 = require("./config.json");
const config_json_3 = require("./config.json");
const discordClient = new discord_js_1.Client({ intents: [discord_js_1.GatewayIntentBits.Guilds] });
const guildedClient = new guilded_js_1.Client({
    token: config_json_2.guildedtoken,
});
let revoltClient = new revolt_js_1.Client();
discordClient.once(discord_js_1.Events.ClientReady, c => {
    console.log('Discord client logged into the OrlandoNet server as ${c.user.tag}');
});
guildedClient.on('ready', () => {
    console.log('Guilded client logged into the OrlandoNet as ${guildedClient.user?.name}');
});
revoltClient.on('ready', () => __awaiter(void 0, void 0, void 0, function* () { return console.log('Revolt client logged into the OrlandoNet as $(revoltClient.user?.name}'); }));
discordClient.login(config_json_1.discordtoken);
guildedClient.login();
revoltClient.loginBot(config_json_3.revolttoken);
//# sourceMappingURL=index.js.map