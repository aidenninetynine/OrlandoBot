import { Client as DiscordClient, Events as DiscordEvents, GatewayIntentBits as DiscordGatewayIntentBits } from 'discord.js'
import { Client as GuildedClient } from 'guilded.js'
import { Client as RevoltClient } from 'revolt.js'

import { discordtoken } from './config.json'
import { guildedtoken } from './config.json'
import { revolttoken } from './config.json'

const discordClient = new DiscordClient({ intents: [DiscordGatewayIntentBits.Guilds] })
const guildedClient = new GuildedClient({
    token: guildedtoken,
});
let revoltClient = new RevoltClient();

discordClient.once(DiscordEvents.ClientReady, c => {
    console.log('Discord client logged into the OrlandoNet server as ${c.user.tag}');
});

guildedClient.on('ready', () => {
    console.log('Guilded client logged into the OrlandoNet as ${guildedClient.user?.name}')
});

revoltClient.on('ready', async () =>
    console.log('Revolt client logged into the OrlandoNet as $(revoltClient.user?.name}')
);

discordClient.login(discordtoken);
guildedClient.login();
revoltClient.loginBot(revolttoken);