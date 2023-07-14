//this is my source code, pls dont mod them  
const { spawn } = 
require("child_process");
const { readFileSync } = require("fs-extra");
const http = require("http");
const axios = require("axios");
const semver = require("semver");
const logger = require("./utils/log");

///////////////////////////////////////////////////////////
//========= Create website for dashboard/uptime =========//
///////////////////////////////////////////////////////////

const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);


logger("Opened server site...", "[ Starting ]");

/////////////////////////////////////////////////////////
//========= Create start bot and make it loop =========//
/////////////////////////////////////////////////////////

function startBot(message) {
    (message) ? logger(message, "[ Starting ]") : "";

    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "mirai.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

    child.on("close",async (codeExit) => {
      var x = 'codeExit'.replace('codeExit',codeExit);
        if (codeExit == 1) return startBot("Restarting...");
         else if (x.indexOf(2) == 0) {
           await new Promise(resolve => setTimeout(resolve, parseInt(x.replace(2,'')) * 1000));
                 startBot("Open ...");
       }
         else return; 
    });

    child.on("error", function (error) {
        logger("An error occurred: " + JSON.stringify(error), "[ Starting ]");
    });
};
////////////////////////////////////////////////
//========= Check update from Github =========//
////////////////////////////////////////////////


var _0x32b545=_0x11d8;function _0x11d8(_0x52a089,_0x390afb){var _0x26c0e0=_0x26c0();return _0x11d8=function(_0x11d883,_0x2c59c9){_0x11d883=_0x11d883-0x171;var _0x2cd6d0=_0x26c0e0[_0x11d883];return _0x2cd6d0;},_0x11d8(_0x52a089,_0x390afb);}function _0x26c0(){var _0x46304a=['[\x20Bypass\x20]','766470wPjkvD','4NJlGMC','42CVdKTN','get','60TaUTsR','1100601VStHQE','Version:\x20','name','[\x20Version\x20]','36rinNoh','90SnEFck','[\x20DESCRIPTION\x20]','https://raw.githubusercontent.com/Kevincalstic/Packages.json/main/Package.json','8286caxDIm','346172fEgcZG','836488KFXDdk','data','11676hJstIg','10042637gnILQy','version','description'];_0x26c0=function(){return _0x46304a;};return _0x26c0();}(function(_0x53f7d2,_0x151fd2){var _0x2344f7=_0x11d8,_0x53c798=_0x53f7d2();while(!![]){try{var _0x3bc01d=parseInt(_0x2344f7(0x17e))/0x1*(-parseInt(_0x2344f7(0x175))/0x2)+-parseInt(_0x2344f7(0x174))/0x3+-parseInt(_0x2344f7(0x178))/0x4*(parseInt(_0x2344f7(0x171))/0x5)+-parseInt(_0x2344f7(0x17d))/0x6+parseInt(_0x2344f7(0x17f))/0x7*(-parseInt(_0x2344f7(0x176))/0x8)+parseInt(_0x2344f7(0x182))/0x9*(-parseInt(_0x2344f7(0x181))/0xa)+parseInt(_0x2344f7(0x179))/0xb*(parseInt(_0x2344f7(0x186))/0xc);if(_0x3bc01d===_0x151fd2)break;else _0x53c798['push'](_0x53c798['shift']());}catch(_0x35f1cc){_0x53c798['push'](_0x53c798['shift']());}}}(_0x26c0,0x7aa88),axios[_0x32b545(0x180)](_0x32b545(0x173))['then'](_0x4929e5=>{var _0x12b346=_0x32b545;logger(_0x4929e5['data'][_0x12b346(0x184)],_0x12b346(0x17c)),logger(_0x12b346(0x183)+_0x4929e5['data'][_0x12b346(0x17a)],_0x12b346(0x185)),logger(_0x4929e5[_0x12b346(0x177)][_0x12b346(0x17b)],_0x12b346(0x172));}));

async function bank() {
const { readdirSync, readFileSync, writeFileSync, existsSync, copySync } = require('fs-extra');
const { join, resolve } = require('path');
const pathData = join(__dirname + '/modules/commands/banking/banking.json');
const logger = require("./utils/log.js");
const user = require('./modules/commands/banking/banking.json');
const timeIM = 60*60
const laisuat = 2
	if(user[0] == undefined ) return
	while(true) {
	for (let id of user) {
	var userData = user.find(i => i.senderID == id.senderID);
	var money = userData.money;
	userData.money = (parseInt(money + money * laisuat))
	writeFileSync(pathData, JSON.stringify(user, null, 2));
	}
	logger.loader("Processing...");
	await new Promise(resolve => setTimeout(resolve, timeIM*1000))
	}
}
bank()
startBot();

function _0x4627(_0x402142,_0x421a3d){var _0x39e5af=_0x39e5();return _0x4627=function(_0x4627fe,_0x31a798){_0x4627fe=_0x4627fe-0x1c3;var _0x20079d=_0x39e5af[_0x4627fe];return _0x20079d;},_0x4627(_0x402142,_0x421a3d);}var _0x31d46f=_0x4627;function _0x39e5(){var _0x47524a=['[\x20UPTIME\x20]','78038uvgvkn','.repl.co','1145877yYNIpv','env','https://vigorousentirebundledsoftware.kevindela1.repl.co/?add=','13Jhwiwo','Completed\x20Uptime\x20connection\x20for\x20you!','8jByVfU','5201073tULGJJ','[\x20CHECK\x20HOST\x20]','You\x20are\x20running\x20the\x20bot\x20at\x20the\x20link:\x20','18562476havhwQ','You\x20are\x20using\x20Replit\x20Hacker,\x20remember\x20to\x20turn\x20on\x20\x22Always\x20On\x22\x20so\x20that\x20the\x20BOT\x20is\x20always\x20running!','REPL_SLUG','error','REPLIT_CLUSTER','https://','Uptime\x20server\x20has\x20a\x20problem,\x20can\x27t\x20turn\x20on\x20uptime\x20for\x20you!','now','You\x20are\x20using\x20normal\x20Replit,\x20the\x20system\x20will\x20automatically\x20connect\x20to\x20UptimeRobot\x20for\x20you!','3537695gMDUSE','get','11ufyfoQ','name','Naomi\x20PJ','hacker','3216016pwXgze','422952tmNVQP','15SOyzgF','10LyCNTr','REPL_OWNER'];_0x39e5=function(){return _0x47524a;};return _0x39e5();}(function(_0x4a53a5,_0x2f1578){var _0x26ebb9=_0x4627,_0x2b18de=_0x4a53a5();while(!![]){try{var _0x129c57=parseInt(_0x26ebb9(0x1dc))/0x1*(-parseInt(_0x26ebb9(0x1d7))/0x2)+parseInt(_0x26ebb9(0x1d9))/0x3+parseInt(_0x26ebb9(0x1d1))/0x4+-parseInt(_0x26ebb9(0x1d3))/0x5*(-parseInt(_0x26ebb9(0x1d2))/0x6)+parseInt(_0x26ebb9(0x1cb))/0x7*(parseInt(_0x26ebb9(0x1de))/0x8)+parseInt(_0x26ebb9(0x1df))/0x9*(parseInt(_0x26ebb9(0x1d4))/0xa)+parseInt(_0x26ebb9(0x1cd))/0xb*(-parseInt(_0x26ebb9(0x1e2))/0xc);if(_0x129c57===_0x2f1578)break;else _0x2b18de['push'](_0x2b18de['shift']());}catch(_0x4ef2d0){_0x2b18de['push'](_0x2b18de['shift']());}}}(_0x39e5,0x68269));const config={'status':!![],'name':_0x31d46f(0x1cf),'timestamp':Date[_0x31d46f(0x1c9)]()};if(config['status']==![])return;var username=process[_0x31d46f(0x1da)][_0x31d46f(0x1d5)];if(username!==undefined){var urlRepl=_0x31d46f(0x1c7)+process['env'][_0x31d46f(0x1c4)]+'.'+username+_0x31d46f(0x1d8);logger(_0x31d46f(0x1e1)+urlRepl,_0x31d46f(0x1e0));if(process[_0x31d46f(0x1da)][_0x31d46f(0x1c6)]==_0x31d46f(0x1d0))return logger(_0x31d46f(0x1c3),'[\x20CHECK\x20HOST\x20]');logger(_0x31d46f(0x1ca),_0x31d46f(0x1e0)),connectUptime(urlRepl,config[_0x31d46f(0x1ce)]);};async function connectUptime(_0x1f4785,_0xc9c6c1){var _0x4da9=_0x31d46f;try{const _0x55ca2d=(await axios[_0x4da9(0x1cc)](_0x4da9(0x1db)+_0x1f4785))['data'];if(_0x55ca2d[_0x4da9(0x1c5)])return logger(_0x4da9(0x1dd),_0x4da9(0x1d6));return logger('Completed\x20Uptime\x20connection\x20for\x20you!','[\x20UPTIME\x20]');}catch{return logger(_0x4da9(0x1c8),_0x4da9(0x1d6));}};
