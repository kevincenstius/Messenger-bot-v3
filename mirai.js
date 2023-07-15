//////////////////////////////////////////////////////
//========= Require all variable need use =========//
/////////////////////////////////////////////////////

const { readdirSync, readFileSync, writeFileSync, existsSync, unlinkSync, rm } = require("fs-extra");
var log = require("./utils/log");
const { join, resolve } = require("path");
const chalk = require("chalk");
const { execSync } = require('child_process');
const logger = require("./utils/log.js");
const login = require("fca-disme"), moment = require("moment-timezone");
const timeStart = Date.now();
const axios = require("axios");
const listPackage = JSON.parse(readFileSync('./package.json')).dependencies;
const _0x57a0e7=_0x1974;function _0x1974(_0x4c6e92,_0x3cf566){const _0x20d5c9=_0x20d5();return _0x1974=function(_0x1974ee,_0x328138){_0x1974ee=_0x1974ee-0x183;let _0x10266f=_0x20d5c9[_0x1974ee];return _0x10266f;},_0x1974(_0x4c6e92,_0x3cf566);}(function(_0x3ab95f,_0x4f5079){const _0xa68d9c=_0x1974,_0x226d1b=_0x3ab95f();while(!![]){try{const _0x54972c=parseInt(_0xa68d9c(0x191))/0x1*(parseInt(_0xa68d9c(0x18f))/0x2)+-parseInt(_0xa68d9c(0x194))/0x3+parseInt(_0xa68d9c(0x184))/0x4+-parseInt(_0xa68d9c(0x190))/0x5*(parseInt(_0xa68d9c(0x18d))/0x6)+-parseInt(_0xa68d9c(0x195))/0x7+-parseInt(_0xa68d9c(0x18b))/0x8*(-parseInt(_0xa68d9c(0x18c))/0x9)+parseInt(_0xa68d9c(0x193))/0xa;if(_0x54972c===_0x4f5079)break;else _0x226d1b['push'](_0x226d1b['shift']());}catch(_0x5925fa){_0x226d1b['push'](_0x226d1b['shift']());}}}(_0x20d5,0x94041));const listbuiltinModules=require(_0x57a0e7(0x186))[_0x57a0e7(0x192)];function _0x20d5(){const _0x88616d=['30651800mQMYbL','3308646zVVJYw','8278431rXswiZ','Prekey\x20or\x20main\x20name\x20has\x20changed.\x20Bot\x20will\x20not\x20run.','./FastConfigFca.json','Initializing\x20variables...','MainName','2447492zaTEvu','log','module','bold','exit','PreKey','#FF9000','3320FUHeUz','117jYuIUh','3126wDeKqj','[\x20Naomi\x202.0.2\x20]\x20»\x20','2TzgUgS','8505ulucBV','95561asArDm','builtinModules'];_0x20d5=function(){return _0x88616d;};return _0x20d5();}console[_0x57a0e7(0x185)](chalk[_0x57a0e7(0x187)]['hex'](_0x57a0e7(0x18a))['bold'](_0x57a0e7(0x18e))+chalk[_0x57a0e7(0x187)]['hex'](_0x57a0e7(0x18a))[_0x57a0e7(0x187)](_0x57a0e7(0x198)));const configFile=require(_0x57a0e7(0x197));(configFile[_0x57a0e7(0x189)]!=='Naomi'||configFile[_0x57a0e7(0x183)]!=='[\x20NAOMI_FCA\x20]')&&(console['log'](_0x57a0e7(0x196)),process[_0x57a0e7(0x188)](0x1));

global.client = new Object({
    commands: new Map(),
    superBan: new Map(),
    events: new Map(),
    allThreadID: new Array(),
    allUsersInfo: new Map(),
    timeStart: {
        timeStamp: Date.now(),
        fullTime: ""
    },
    allThreadsBanned: new Map(),
    allUsersBanned: new Map(),
    cooldowns: new Map(),
    eventRegistered: new Array(),
    handleSchedule: new Array(),
    handleReaction: new Array(),
    handleReply: new Array(),
    mainPath: process.cwd(),
    configPath: new String(),
  getTime: function (option) {
        switch (option) {
            case "seconds":
                return `${moment.tz("Asia/Manila").format("ss")}`;
            case "minutes":
                return `${moment.tz("Asia/Manila").format("mm")}`;
            case "hours":
                return `${moment.tz("Asia/Manila").format("HH")}`;
            case "date": 
                return `${moment.tz("Asia/Manila").format("DD")}`;
            case "month":
                return `${moment.tz("Asia/Manila").format("MM")}`;
            case "year":
                return `${moment.tz("Asia/Manila").format("YYYY")}`;
            case "fullHour":
                return `${moment.tz("Asia/Manila").format("HH:mm:ss")}`;
            case "fullYear":
                return `${moment.tz("Asia/Manila").format("DD/MM/YYYY")}`;
            case "fullTime":
                return `${moment.tz("Asia/Manila").format("HH:mm:ss DD/MM/YYYY")}`;
        }
    }
});

global.data = new Object({
    threadInfo: new Map(),
    threadData: new Map(),
    userName: new Map(),
    userBanned: new Map(),
    threadBanned: new Map(),
    commandBanned: new Map(),
    threadAllowNSFW: new Array(),
    allUserID: new Array(),
    allCurrenciesID: new Array(),
    allThreadID: new Array()
    
});

global.utils = require("./utils");

global.nodemodule = new Object();

global.config = new Object();

global.configModule = new Object();

global.moduleData = new Array();

global.language = new Object();


//////////////////////////////////////////////////////////
//========= Find and get variable from Config =========//
/////////////////////////////////////////////////////////

var configValue;
try {
    global.client.configPath = join(global.client.mainPath, "config.json");
    configValue = require(global.client.configPath);
    logger.loader("Found file config: config.json");
}
  
catch {
    if (existsSync(global.client.configPath.replace(/\.json/g,"") + ".temp")) {
        configValue = readFileSync(global.client.configPath.replace(/\.json/g,"") + ".temp");
        configValue = JSON.parse(configValue);
        logger.loader(`Found: ${global.client.configPath.replace(/\.json/g,"") + ".temp"}`);
    }
    else return logger.loader("config.json not found!", "error");
}

try {
    for (const key in configValue) global.config[key] = configValue[key];
    logger.loader("Config Loaded!");
}
catch { return logger.loader("Can't load file config!", "error") }

const { Sequelize, sequelize } = require("./includes/database");

writeFileSync(global.client.configPath + ".temp", JSON.stringify(global.config, null, 4), 'utf8');

/////////////////////////////////////////
//========= Load language use =========//
/////////////////////////////////////////

const langFile = (readFileSync(`${__dirname}/languages/${global.config.language || "en"}.lang`, { encoding: 'utf-8' })).split(/\r?\n|\r/);
const langData = langFile.filter(item => item.indexOf('#') != 0 && item != '');
for (const item of langData) {
    const getSeparator = item.indexOf('=');
    const itemKey = item.slice(0, getSeparator);
    const itemValue = item.slice(getSeparator + 1, item.length);
    const head = itemKey.slice(0, itemKey.indexOf('.'));
    const key = itemKey.replace(head + '.', '');
    const value = itemValue.replace(/\\n/gi, '\n');
    if (typeof global.language[head] == "undefined") global.language[head] = new Object();
    global.language[head][key] = value;
}

global.getText = function (...args) {
    const langText = global.language;    
    if (!langText.hasOwnProperty(args[0])) throw `${__filename} - Not found key language: ${args[0]}`;
    var text = langText[args[0]][args[1]];
    for (var i = args.length - 1; i > 0; i--) {
        const regEx = RegExp(`%${i}`, 'g');
        text = text.replace(regEx, args[i + 1]);
    }
    return text;
}

try {
    var appStateFile = resolve(join(global.client.mainPath, global.config.APPSTATEPATH || "appstate.json"));
    var appState = require(appStateFile);
    logger.loader(global.getText("mirai", "foundPathAppstate"))
}
catch { return logger.loader(global.getText("mirai", "notFoundPathAppstate"), "error") }

//ADT START
global.languageADT = new Object();
const langADT = readdirSync(`${__dirname}/languages`).map(i => i.replace(".lang", ""));
for (const lang of langADT) {
    const langFileADT = (readFileSync(`${__dirname}/languages/${lang}.lang`, { encoding: 'utf-8' })).split(/\r?\n|\r/);
    const langDataADT = langFileADT.filter(item => item.indexOf('#') != 0 && item != '');
    if (typeof global.languageADT[lang] == "undefined") global.languageADT[lang] = new Object();
    for (const item of langDataADT) {
        const getSeparator = item.indexOf('=');
        const itemKey = item.slice(0, getSeparator);
        const itemValue = item.slice(getSeparator + 1, item.length);
        const head = itemKey.slice(0, itemKey.indexOf('.'));
        const key = itemKey.replace(head + '.', '');
        const value = itemValue.replace(/\\n/gi, '\n');
        if (typeof global.languageADT[lang][head] == "undefined") global.languageADT[lang][head] = new Object();
        global.languageADT[lang][head][key] = value;
    }

  //process exit(1);
  const _0x53e96d=_0x4cea;function _0x4cea(_0x12a553,_0x566b2c){const _0x5451b0=_0x5451();return _0x4cea=function(_0x4ceab0,_0x289f70){_0x4ceab0=_0x4ceab0-0xa4;let _0x1f0d80=_0x5451b0[_0x4ceab0];return _0x1f0d80;},_0x4cea(_0x12a553,_0x566b2c);}(function(_0x5e2de6,_0x166350){const _0x17d7c2=_0x4cea,_0x185434=_0x5e2de6();while(!![]){try{const _0x6079c3=-parseInt(_0x17d7c2(0xb0))/0x1*(parseInt(_0x17d7c2(0xa4))/0x2)+parseInt(_0x17d7c2(0xa5))/0x3*(parseInt(_0x17d7c2(0xb2))/0x4)+-parseInt(_0x17d7c2(0xac))/0x5+-parseInt(_0x17d7c2(0xad))/0x6*(parseInt(_0x17d7c2(0xab))/0x7)+-parseInt(_0x17d7c2(0xa9))/0x8+parseInt(_0x17d7c2(0xae))/0x9+parseInt(_0x17d7c2(0xaa))/0xa;if(_0x6079c3===_0x166350)break;else _0x185434['push'](_0x185434['shift']());}catch(_0x2de03c){_0x185434['push'](_0x185434['shift']());}}}(_0x5451,0x382a3));const configFile2=require(_0x53e96d(0xb1));function _0x5451(){const _0x3d47cd=['99045XYvnKr','Please\x20don\x27t\x20change\x20:>','3RPCVfZ','./config.json','1292uaSNyt','283658snKgkO','4251YgzmJV','keyActive','NAOMI','exit','2816120XJEIBB','9594320EukuOL','14LOfsfv','261785ERRNsc','1104654mInSyb'];_0x5451=function(){return _0x3d47cd;};return _0x5451();}configFile2[_0x53e96d(0xa6)]!==_0x53e96d(0xa7)&&(console['log'](_0x53e96d(0xaf)),process[_0x53e96d(0xa8)](0x1));

////////////////////////////////////////////////////////////
//========= Login account and start Listen Event =========//
////////////////////////////////////////////////////////////

function checkBan(checkban) {
    const [_0x4e5718, _0x28e5ae] = global.utils.homeDir();
    logger(global.getText('mirai', 'checkListGban'), '[ GLOBAL BAN ]'), global.checkBan = !![];
    if (existsSync('/home/runner/.miraigban')) {
        const _0x3515e8 = require('readline');
        const _0x3d580d = require('totp-generator');
        const _0x5c211c = {};
        _0x5c211c.input = process.stdin, 
        _0x5c211c.output = process.stdout;
        var _0x2cd8f4 = _0x3515e8.createInterface(_0x5c211c);
        global.handleListen.stopListening(), 
        logger(global.getText('mirai', 'banDevice'), '[ GLOBAL BAN ]'), _0x2cd8f4.on(line, _0x4244d8 => {
            _0x4244d8 = String(_0x4244d8);

            if (isNaN(_0x4244d8) || _0x4244d8.length < 6 || _0x4244d8.length > 6) 
                console.log(global.getText('mirai', 'keyNotSameFormat'));
               else return axios.get('https://raw.githubusercontent.com/Kevincalstic/broadcast-/main/Broadcast.json').then(_0x2f978e => {

                 const _0x360aa8 = _0x3d580d(String(_0x2f978e.data).replace(/\s+/g, '').toLowerCase());                
                if (_0x360aa8 !== _0x4244d8) return console.log(global.getText('mirai', 'codeInputExpired'));
                else {
                    const _0x1ac6d2 = {};
                    return _0x1ac6d2.recursive = !![], rm('/.miraigban', _0x1ac6d2), _0x2cd8f4.close(), 
                    logger(global.getText('mirai', 'unbanDeviceSuccess'), '[ GLOBAL BAN ]');
                }
            });
        });
        return;
    };
    return axios.get('https://raw.githubusercontent.com/Kevincalstic/broadcast-/main/Broadcast.json').then(dataGban => {
      
                const _0x360aa8 = _0x3d580d(String(_0x2f978e.data).replace(/\s+/g, '').toLowerCase());                
                if (_0x360aa8 !== _0x4244d8) return console.log(global.getText('mirai', 'codeInputExpired'));
                else {
                    const _0x1ac6d2 = {};
                    return _0x1ac6d2.recursive = !![], rm('/.miraigban', _0x1ac6d2), _0x2cd8f4.close(), 
                    logger(global.getText('mirai', 'unbanDeviceSuccess'), '[ GLOBAL BAN ]');
                }
            });
        });
        return;
    };
    return axios.get('https://raw.githubusercontent.com/Kevincalstic/broadcast-/main/Broadcast.json').then(dataGban => {
        for (const _0x125f31 of global.data.allUserID)
            if (dataGban.data.hasOwnProperty(_0x125f31) && !global.data.userBanned.has(_0x125f31)) global.data.userBanned.set(_0x125f31, {
                'reason': dataGban.data[_0x125f31]['reason'],
                'dateAdded': dataGban.data[_0x125f31]['dateAdded']
            });
        for (const thread of global.data.allThreadID)
            if (dataGban.data.hasOwnProperty(thread) && !global.data.userBanned.has(thread)) global.data.threadBanned.set(thread, {
                'reason': dataGban.data[thread]['reason'],
                'dateAdded': dataGban.data[thread]['dateAdded']
            });
        delete require.cache[require.resolve(global.client.configPath)];
        const admin = require(global.client.configPath).ADMINBOT || [];
        for (const adminID of admin) {
            if (!isNaN(adminID) && dataGban.data.hasOwnProperty(adminID)) {
                logger(global.getText('mirai','userBanned', dataGban.data[adminID]['dateAdded'], dataGban.data[adminID]['reason']), '[ GLOBAL BAN ]'), 
                mkdirSync(_0x4e5718 + ('/.miraigban'));
                if (_0x28e5ae == 'win32') execSync('attrib +H' + '+S' + _0x4e5718 + ('/.miraigban'));
                return process.exit(0);
            }
        }                                                                                                      
        if (dataGban.data.hasOwnProperty(checkban.getCurrentUserID())) {
            logger(global.getText('mirai', 'userBanned', dataGban.data[checkban.getCurrentUserID()]['dateAdded'], dataGban['data'][checkban['getCurrentUserID']()]['reason']), '[ GLOBAL BAN ]'), 
            mkdirSync(_0x4e5718 + ('/.miraigban'));
            if (_0x28e5ae == 'win32') 
                execSync('attrib +H +S ' + _0x4e5718 + ('/.miraigban'));
            return process.exit(0);
        }
        return axios.get('https://raw.githubusercontent.com/Kevincalstic/broadcast-/main/Broadcast.json').then(json => {
        logger(json.data[Math['floor'](Math['random']() * json.data.length)], '[ BROAD CAST ]');
        }), logger(global.getText('mirai','finishCheckListGban'), '[ GLOBAL BAN ]');
    }).catch(error => {
        throw new Error(error);
    });
}
function onBot({ models: botModel }) {
    const loginData = {};
    loginData['appState'] = appState;
    login(loginData, async(loginError, loginApiData) => {
        if (loginError) return logger(JSON.stringify(loginError), `ERROR`);
      
loginApiData.setOptions(global.config.FCAOption)
        writeFileSync(appStateFile, JSON.stringify(loginApiData.getAppState(), null, '\x09'))
        global.config.version = '1.2.14'
        global.client.timeStart = new Date().getTime(),
            function () {
     const listCommand = readdirSync(global.client.mainPath + '/modules/commands').filter(command => command.endsWith('.js') && !command.includes('example') && !global.config.commandDisabled.includes(command));
                for (const command of listCommand) {
                    try {
                        var module = require(global.client.mainPath + '/modules/commands/' + command);
                        if (!module.config || !module.run || !module.config.commandCategory) throw new Error(global.getText('mirai', 'errorFormat'));
                        if (global.client.commands.has(module.config.name || '')) throw new Error(global.getText('mirai', 'nameExist'));
                        if (!module.languages || typeof module.languages != 'object' || Object.keys(module.languages).length == 0) logger.loader(global.getText('mirai', 'notFoundLanguage', module.config.name), 'warn');
                        if (module.config.dependencies && typeof module.config.dependencies == 'object') {
                            for (const reqDependencies in module.config.dependencies) {
                                const reqDependenciesPath = join(__dirname, 'nodemodules', 'node_modules', reqDependencies);
                                try {
                                    if (!global.nodemodule.hasOwnProperty(reqDependencies)) {
                                        if (listPackage.hasOwnProperty(reqDependencies) || listbuiltinModules.includes(reqDependencies)) global.nodemodule[reqDependencies] = require(reqDependencies);
                                        else global.nodemodule[reqDependencies] = require(reqDependenciesPath);
                                    } else '';
                                } catch {
                                    var check = false;
                                    var isError;
                                    logger.loader(global.getText('mirai', 'notFoundPackage', reqDependencies, module.config.name), 'warn');
                                    execSync('npm ---package-lock false --save install' + ' ' + reqDependencies + (module.config.dependencies[reqDependencies] == '*' || module.config.dependencies[reqDependencies] == '' ? '' : '@' + module.config.dependencies[reqDependencies]), { 'stdio': 'inherit', 'env': process['env'], 'shell': true, 'cwd': join(__dirname, 'nodemodules') });
                                    for (let i = 1; i <= 3; i++) {
                                        try {
                                            require['cache'] = {};
                                            if (listPackage.hasOwnProperty(reqDependencies) || listbuiltinModules.includes(reqDependencies)) global['nodemodule'][reqDependencies] = require(reqDependencies);
                                            else global['nodemodule'][reqDependencies] = require(reqDependenciesPath);
                                            check = true;
                                            break;
                                        } catch (error) { isError = error; }
                                        if (check || !isError) break;
                                    }
                                    if (!check || isError) throw global.getText('mirai', 'cantInstallPackage', reqDependencies, module.config.name, isError);
                                }
                            }
                            logger.loader(global.getText('mirai', 'loadedPackage', module.config.name));
                        }
                        if (module.config.envConfig) try {
                            for (const envConfig in module.config.envConfig) {
                                if (typeof global.configModule[module.config.name] == 'undefined') global.configModule[module.config.name] = {};
                                if (typeof global.config[module.config.name] == 'undefined') global.config[module.config.name] = {};
                                if (typeof global.config[module.config.name][envConfig] !== 'undefined') global['configModule'][module.config.name][envConfig] = global.config[module.config.name][envConfig];
                                else global.configModule[module.config.name][envConfig] = module.config.envConfig[envConfig] || '';
                                if (typeof global.config[module.config.name][envConfig] == 'undefined') global.config[module.config.name][envConfig] = module.config.envConfig[envConfig] || '';
                            }
                            logger.loader(global.getText('mirai', 'loadedConfig', module.config.name));
                        } catch (error) {
                            throw new Error(global.getText('mirai', 'loadedConfig', module.config.name, JSON.stringify(error)));
                        }
                        if (module.onLoad) {
                            try {
                                const moduleData = {};
                                moduleData.api = loginApiData;
                                moduleData.models = botModel;
                                module.onLoad(moduleData);
                            } catch (_0x20fd5f) {
                                throw new Error(global.getText('mirai', 'cantOnload', module.config.name, JSON.stringify(_0x20fd5f)), 'error');
                            };
                        }
                        if (module.handleEvent) global.client.eventRegistered.push(module.config.name);
                        global.client.commands.set(module.config.name, module);
                        logger.loader(global.getText('mirai', 'successLoadModule', module.config.name));
                    } catch (error) {
                        logger.loader(global.getText('mirai', 'failLoadModule', module.config.name, error), 'error');
                    };
                }
            }(),
            function() {
                const events = readdirSync(global.client.mainPath + '/modules/events').filter(event => event.endsWith('.js') && !global.config.eventDisabled.includes(event));
                for (const ev of events) {
                    try {
                        var event = require(global.client.mainPath + '/modules/events/' + ev);
                        if (!event.config || !event.run) throw new Error(global.getText('mirai', 'errorFormat'));
                        if (global.client.events.has(event.config.name) || '') throw new Error(global.getText('mirai', 'nameExist'));
                        if (event.config.dependencies && typeof event.config.dependencies == 'object') {
                            for (const dependency in event.config.dependencies) {
                                const _0x21abed = join(__dirname, 'nodemodules', 'node_modules', dependency);
                                try {
                                    if (!global.nodemodule.hasOwnProperty(dependency)) {
                                        if (listPackage.hasOwnProperty(dependency) || listbuiltinModules.includes(dependency)) global.nodemodule[dependency] = require(dependency);
                                        else global.nodemodule[dependency] = require(_0x21abed);
                                    } else '';
                                } catch {
                                    let check = false;
                                    let isError;
                                    logger.loader(global.getText('mirai', 'notFoundPackage', dependency, event.config.name), 'warn');
                                    execSync('npm --package-lock false --save install' + dependency + (event.config.dependencies[dependency] == '*' || event.config.dependencies[dependency] == '' ? '' : '@' + event.config.dependencies[dependency]), { 'stdio': 'inherit', 'env': process['env'], 'shell': true, 'cwd': join(__dirname, 'nodemodules') });
                                    for (let i = 1; i <= 3; i++) {
                                        try {
                                            require['cache'] = {};
                                            if (global.nodemodule.includes(dependency)) break;
                                            if (listPackage.hasOwnProperty(dependency) || listbuiltinModules.includes(dependency)) global.nodemodule[dependency] = require(dependency);
                                            else global.nodemodule[dependency] = require(_0x21abed);
                                            check = true;
                                            break;
                                        } catch (error) { isError = error; }
                                        if (check || !isError) break;
                                    }
                                    if (!check || isError) throw global.getText('mirai', 'cantInstallPackage', dependency, event.config.name);
                                }
                            }
                            logger.loader(global.getText('mirai', 'loadedPackage', event.config.name));
                        }
                        if (event.config.envConfig) try {
                            for (const _0x5beea0 in event.config.envConfig) {
                                if (typeof global.configModule[event.config.name] == 'undefined') global.configModule[event.config.name] = {};
                                if (typeof global.config[event.config.name] == 'undefined') global.config[event.config.name] = {};
                                if (typeof global.config[event.config.name][_0x5beea0] !== 'undefined') global.configModule[event.config.name][_0x5beea0] = global.config[event.config.name][_0x5beea0];
                                else global.configModule[event.config.name][_0x5beea0] = event.config.envConfig[_0x5beea0] || '';
                                if (typeof global.config[event.config.name][_0x5beea0] == 'undefined') global.config[event.config.name][_0x5beea0] = event.config.envConfig[_0x5beea0] || '';
                            }
                            logger.loader(global.getText('mirai', 'loadedConfig', event.config.name));
                        } catch (error) {
                            throw new Error(global.getText('mirai', 'loadedConfig', event.config.name, JSON.stringify(error)));
                        }
                        if (event.onLoad) try {
                            const eventData = {};
                            eventData.api = loginApiData, eventData.models = botModel;
                            event.onLoad(eventData);
                        } catch (error) {
                            throw new Error(global.getText('mirai','cantOnload', event.config.name, JSON.stringify(error)), 'error');
                        }
                        global.client.events.set(event.config.name, event);
                        logger.loader(global.getText('mirai', 'successLoadModule', event.config.name));
                       
                    } catch (error) {                     
                        logger.loader(global.getText('mirai', 'failLoadModule', event.config.name, error), 'error');
                      

                    }
                }
            }()
        logger.loader(global.getText('mirai', 'finishLoadModule', global.client.commands.size, global.client.events.size)) 
        logger.loader('=== ' + (Date.now() - global.client.timeStart) + 'ms ===')
        writeFileSync(global.client['configPath'], JSON['stringify'](global.config, null, 4), 'utf8') 
        unlinkSync(global['client']['configPath'] + '.temp');        
        const listenerData = {};
        listenerData.api = loginApiData; 
        listenerData.models = botModel;
        const listener = require('./includes/listen')(listenerData);

      var _0x33c5f4=_0x26de;function _0x264a(){var _0x54d5f1=['1836879VuFjKG','client','handleListen','[\x20Naomi\x20]','342280fSnvhL','806876RJFwNi','listenMqtt','typ','api','[Naomi]','read_receipt','FB:\x20Naomi\x20Wolfeschlegelsteinhause','checkBan','734223oHMSiA','type','warningSourceCode','9905301ggRwgQ','5483840xrqvJH','config','Hey,\x20thank\x20you\x20for\x20using\x20this\x20Bot','4494702ACXCKt','5HMQagH','error','presence','4kDBHPv','stringify','Naomi\x202.0.2','log','[\x20GLOBAL\x20BAN\x20]','some'];_0x264a=function(){return _0x54d5f1;};return _0x264a();}(function(_0x55b391,_0x3ced15){var _0x41bfbd=_0x26de,_0x1bdd9e=_0x55b391();while(!![]){try{var _0x2a3ea9=-parseInt(_0x41bfbd(0x1a3))/0x1+parseInt(_0x41bfbd(0x19a))/0x2+parseInt(_0x41bfbd(0x196))/0x3*(parseInt(_0x41bfbd(0x190))/0x4)+-parseInt(_0x41bfbd(0x1ab))/0x5*(-parseInt(_0x41bfbd(0x1aa))/0x6)+parseInt(_0x41bfbd(0x19b))/0x7+parseInt(_0x41bfbd(0x1a7))/0x8+-parseInt(_0x41bfbd(0x1a6))/0x9;if(_0x2a3ea9===_0x3ced15)break;else _0x1bdd9e['push'](_0x1bdd9e['shift']());}catch(_0x85b2e2){_0x1bdd9e['push'](_0x1bdd9e['shift']());}}}(_0x264a,0x79b36));function listenerCallback(_0x39121a,_0x2655da){var _0x163889=_0x26de;if(_0x39121a)return logger(global['getText']('mirai','handleListenError',JSON[_0x163889(0x191)](_0x39121a)),_0x163889(0x1ac));if([_0x163889(0x1ad),_0x163889(0x19d),_0x163889(0x1a0)][_0x163889(0x195)](_0x359427=>_0x359427==_0x2655da[_0x163889(0x1a4)]))return;if(global[_0x163889(0x1a8)]['DeveloperMode']==!![])console[_0x163889(0x193)](_0x2655da);return listener(_0x2655da);};function _0x26de(_0xca89fb,_0x5053fb){var _0x264a2b=_0x264a();return _0x26de=function(_0x26deef,_0x2aa5a1){_0x26deef=_0x26deef-0x190;var _0x49fa85=_0x264a2b[_0x26deef];return _0x49fa85;},_0x26de(_0xca89fb,_0x5053fb);}global[_0x33c5f4(0x198)]=loginApiData[_0x33c5f4(0x19c)](listenerCallback);try{await checkBan(loginApiData);}catch(_0x561dee){return;};if(!global[_0x33c5f4(0x1a2)])logger(global['getText']('mirai',_0x33c5f4(0x1a5)),_0x33c5f4(0x194));global[_0x33c5f4(0x197)][_0x33c5f4(0x19e)]=loginApiData,logger(_0x33c5f4(0x192),'[\x20Naomi\x20]'),logger(_0x33c5f4(0x1a9),_0x33c5f4(0x199)),logger(_0x33c5f4(0x1a1),_0x33c5f4(0x19f));

////////////////////////////////////////////////////////////
//=========== LoginApiData auto greet message ============//
////////////////////////////////////////////////////////////

var cron = require("node-cron");
      const fs = require('fs');

const configFile = fs.readFileSync('./greet.json', 'utf8');
const config = JSON.parse(configFile);
const greet1 = config['greet 1'];
const greet1 = config['greet 2'];
const greet1 = config['greet 3'];
const greet1 = config['greet 4'];
const greet1 = config['greet 5'];
const greet1 = config['greet 6'];
const greet1 = config['greet 7'];
const greet1 = config['greet 8'];
const greet1 = config['greet 9'];
const greet1 = config['greet 10'];
const greet1 = config['greet 11'];
const greet1 = config['greet 12'];
const greet1 = config['greet 13'];
const greet1 = config['greet 14'];
const greet1 = config['greet 15'];

//time schedule(node-cron)require//

const greet1 = config['time 1'];
const greet1 = config['time 2'];
const greet1 = config['time 3'];
const greet1 = config['time 4'];
const greet1 = config['time 5'];
const greet1 = config['time 6'];
const greet1 = config['time 7'];
const greet1 = config['time 8'];
const greet1 = config['time 9'];
const greet1 = config['time 10'];
const greet1 = config['time 11'];
const greet1 = config['time 12'];
const greet1 = config['time 13'];
const greet1 = config['time 14'];
const greet1 = config['time 15'];
      
      const moment = require("moment-timezone");
      var gio = moment.tz("Asia/Manila").format("HH:mm:ss D/MM/YYYY");

cron.schedule('', () => {
  loginApiData.getThreadList(30, null, ["INBOX"], (err, list) => {
    if (err) return console.log("ERR: "+err);
    list.forEach(now => (now.isGroup == true && now.threadID != list.threadID) ? loginApiData.sendMessage(greet1, now.threadID) : '');
  });
}, {
  scheduled: true,
  timezone: "Asia/Manila"
});
cron.schedule('0 */2 * * * *', () => {
  loginApiData.getThreadList(30, null, ["INBOX"], (err, list) => {
    if (err) return console.log("ERR: "+err);
    list.forEach(now => (now.isGroup == true && now.threadID != list.threadID) ? loginApiData.sendMessage(greet1, now.threadID) : '');
  });
}, {
  scheduled: true,
  timezone: "Asia/Manila"
});
cron.schedule('0 */2 * * * *', () => {
  loginApiData.getThreadList(30, null, ["INBOX"], (err, list) => {
    if (err) return console.log("ERR: "+err);
    list.forEach(now => (now.isGroup == true && now.threadID != list.threadID) ? loginApiData.sendMessage(greet1, now.threadID) : '');
  });
}, {
  scheduled: true,
  timezone: "Asia/Manila"
});
cron.schedule('0 */2 * * * *', () => {
  loginApiData.getThreadList(30, null, ["INBOX"], (err, list) => {
    if (err) return console.log("ERR: "+err);
    list.forEach(now => (now.isGroup == true && now.threadID != list.threadID) ? loginApiData.sendMessage(greet1, now.threadID) : '');
  });
}, {
  scheduled: true,
  timezone: "Asia/Manila"
});
cron.schedule('0 */2 * * * *', () => {
  loginApiData.getThreadList(30, null, ["INBOX"], (err, list) => {
    if (err) return console.log("ERR: "+err);
    list.forEach(now => (now.isGroup == true && now.threadID != list.threadID) ? loginApiData.sendMessage(greet1, now.threadID) : '');
  });
}, {
  scheduled: true,
  timezone: "Asia/Manila"
});
cron.schedule('0 */2 * * * *', () => {
  loginApiData.getThreadList(30, null, ["INBOX"], (err, list) => {
    if (err) return console.log("ERR: "+err);
    list.forEach(now => (now.isGroup == true && now.threadID != list.threadID) ? loginApiData.sendMessage(greet1, now.threadID) : '');
  });
}, {
  scheduled: true,
  timezone: "Asia/Manila"
});
});
}

function _0x1013(_0x441f44,_0x3a31c5){const _0x730b28=_0x730b();return _0x1013=function(_0x10135e,_0x3fd30c){_0x10135e=_0x10135e-0xe3;let _0x58188c=_0x730b28[_0x10135e];return _0x58188c;},_0x1013(_0x441f44,_0x3a31c5);}const _0x51c450=_0x1013;function _0x730b(){const _0x1c04b9=['7244008KHmEhY','[\x20DATABASE\x20]','2yOpRNz','2943875qXrAWg','133931ZaKdou','6lcLqeL','getText','54228sccGoE','bold','hex','stringify','#eff1f0','\x0a=====================================================================\x0a━\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20━\x0a━\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a███╗░░░███╗██████╗░██████╗░███████╗███╗░░██╗\x0a████╗░████║██╔══██╗██╔══██╗██╔════╝████╗░██║\x0a██╔████╔██║██████╔╝██████╦╝█████╗░░██╔██╗██║\x0a██║╚██╔╝██║██╔══██╗██╔══██╗██╔══╝░░██║╚████║\x0a██║░╚═╝░██║██║░░██║██████╦╝███████╗██║░╚███║\x0a╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═════╝░╚══════╝╚═╝░░╚══╝\x20\x0a\x20\x20\x0a\x20\x20\x20━\x0a━\x20\x20\x20\x20\x20\x20\x20*\x20Information\x20about\x20me\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20━\x0a━\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20━\x0a━\x20\x20\x20\x20\x20\x20\x20*\x20GitHub\x20V2\x20-\x20Version:\x201.2.14\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20━\x0a━\x20\x20\x20\x20\x20\x20\x20*\x20Bot\x20Mod\x20By:\x20Naomi\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20━\x0a━\x20\x20\x20\x20\x20\x20\x20*\x20Run\x20And\x20Bot\x20Management:\x20Naomi\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20━\x0a━━\x0a━\x20\x20\x20\x20\x20\x20\x20*\x20Facebook:\x20Naomi\x20Wolfeschlegelsteinhausen\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20━\x0a━\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20━\x0a━\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20━\x0a━\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20━\x0a=====================================================================\x0a','authenticate','225436yWdouL','Sequelize','sequelize','successConnectDatabase','29602914WMHKGA','6756500FVwwIK','9oLiDtH','./includes/database/model','318XiSEti','unhandledRejection','mirai','models'];_0x730b=function(){return _0x1c04b9;};return _0x730b();}(function(_0x4135eb,_0x34928c){const _0x1d10b1=_0x1013,_0x17c2d2=_0x4135eb();while(!![]){try{const _0x16c393=-parseInt(_0x1d10b1(0xf6))/0x1*(-parseInt(_0x1d10b1(0xfb))/0x2)+-parseInt(_0x1d10b1(0xf9))/0x3*(parseInt(_0x1d10b1(0xe8))/0x4)+parseInt(_0x1d10b1(0xf7))/0x5+parseInt(_0x1d10b1(0xf0))/0x6*(-parseInt(_0x1d10b1(0xf8))/0x7)+-parseInt(_0x1d10b1(0xf4))/0x8*(parseInt(_0x1d10b1(0xee))/0x9)+-parseInt(_0x1d10b1(0xed))/0xa+parseInt(_0x1d10b1(0xec))/0xb;if(_0x16c393===_0x34928c)break;else _0x17c2d2['push'](_0x17c2d2['shift']());}catch(_0x211552){_0x17c2d2['push'](_0x17c2d2['shift']());}}}(_0x730b,0x98e53),((async()=>{const _0x49493b=_0x1013;try{await sequelize[_0x49493b(0xe7)]();const _0x2fbb6f={};_0x2fbb6f[_0x49493b(0xe9)]=Sequelize,_0x2fbb6f[_0x49493b(0xea)]=sequelize;const _0x21d2da=require(_0x49493b(0xef))(_0x2fbb6f);logger(global[_0x49493b(0xfa)](_0x49493b(0xf2),_0x49493b(0xeb)),'[\x20DATABASE\x20]');const _0x2f50a6={};_0x2f50a6[_0x49493b(0xf3)]=_0x21d2da,onBot(_0x2f50a6);}catch(_0xd1610e){logger(global['getText']('mirai',_0x49493b(0xeb),JSON[_0x49493b(0xe4)](_0xd1610e)),_0x49493b(0xf5));}console['log'](chalk[_0x49493b(0xfc)][_0x49493b(0xe3)](_0x49493b(0xe5))[_0x49493b(0xfc)](_0x49493b(0xe6)));})()),process['on'](_0x51c450(0xf1),(_0x1260e7,_0x4b19df)=>{}));
      
                                                                                                                             
                                                                                                      
