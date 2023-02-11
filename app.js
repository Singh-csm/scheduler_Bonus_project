const cron = require("node-cron");
const shell = require("shelljs");

cron.schedule("*/3 * * * * * ", function(){
    console.log("node.js script is running");
})

