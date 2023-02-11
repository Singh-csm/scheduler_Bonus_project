const cron = require("node-cron");
const shell = require("shelljs");
const moment = require("moment")
cron.schedule("*/3 * * * * * ", function(){
    console.log("node.js script is running", moment().format("DD MMM YYYY hh:mm:ss"));
})

cron.schedule("* * * * * *", ()=>{
    console.log("run the task every second", moment().format("DD MMM YYYY hh:mm:ss"));
});

cron.schedule("2-6 * * * * *",()=>{
    console.log("my team is working during this time only", moment().format("DD MMM YYYY hh:mm:ss"))
});

cron.schedule("0 0 10 * Feb *", ()=>{   //0 0 10 * FEb * means at  10 am 0second 0 minute everyday for the month of feb every week
    console.log("californium class is sceduled everyday at 10 AM", moment().format("DD MMM YYY hh:mm:ss"))
});