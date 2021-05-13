const { ShardingManager } = require("discord.js");
const manager = new ShardingManager("./index.js", {
    token: require("ODQxNzM0NTY1MDM4Nzg0NTIz.YJrEZg.DOxEZLkbreiJ-CFtd3ChNChw0u0").token,
    totalShards: require("./config").shardCount,
    shardArgs: [ ...process.argv, ...[ "--sharded" ] ]
});

const log = require("./helpers/logger");
log("ManageInvite has been started! 🚀\n");

manager.spawn();
