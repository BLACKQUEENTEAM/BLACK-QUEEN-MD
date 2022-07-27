require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const whitehackers = require('xfarr-api')

//rpg function\\
   const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('./storage/user/darah.js')
   const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi, 
       addEmas, 
       addEmerald,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmas, 
       kurangEmerald, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
      getEmas, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('./storage/user/alat_tukar.js')
   const { 
    addInventoriMonay, 
    cekDuluJoinAdaApaKagaMonaynyaDiJson, 
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('./storage/user/monay.js')
   const { 
    addInventoriLimit, 
    cekDuluJoinAdaApaKagaLimitnyaDiJson, 
    addLimit, 
    kurangLimit, 
    getLimit 
   } = require('./storage/user/limit.js')
   const { 
    cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     addIkan,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
     getSapi,
    getGajah
   } = require('./storage/user/buruan.js')
   let DarahAwal =  global.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isIkan = getIkan(m.sender)
   const isAyam = getAyam(m.sender)
   const isKelinci = getKelinci(m.sender)
   const isDomba = getDomba(m.sender)
   const isSapi = getSapi(m.sender)
   const isGajah = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   const isLimit = getLimit(m.sender)
   const isBesi = getBesi(m.sender)
   const isEmas = getEmas(m.sender)
   const isEmerald = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const ikan = ['🔥','🎲','🎭']   

//rpg database\\
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

//Database\\
let setik = JSON.parse(fs.readFileSync('./database/setik.json'));
let vien = JSON.parse(fs.readFileSync('./database/vien.json'));
let imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
let videox = JSON.parse(fs.readFileSync('./database/video.json'))

//read database\\
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = BlackQueenmdWH = async (BlackQueenmdWH, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await BlackQueenmdWH.decodeJid(BlackQueenmdWH.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid
	    const type = Object.keys(mek.message)[0]        
	    const content = JSON.stringify(mek.message)

        //group\\
        const groupMetadata = m.isGroup ? await BlackQueenmdWH.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	    
        //member\\
        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
		
          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }

                
	//group target \\
const reply = (teks) => {
            BlackQueenmdWH.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": ` [🇱🇰𝚱𝚰𝚴Ｇ 𝛃𝚯𝚪🤘]`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BlackQueenMedia/logo.jpeg`),"sourceUrl": "https://telegra.ph/file/24b9b8507613125d34bd1.jpgo"}}}, { quoted: m})
        }
        
        const replay = (teks) => {
            BlackQueenmdWH.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": ` [🇱🇰𝚱𝚰𝚴Ｇ 𝛃𝚯𝚪🤘]`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./BlackQueenMedia/logo.jpeg`),"sourceUrl": "https://chat.whatsapp.com/KNXP4fcK8ehJsdPlsM97wr"}}}, { quoted: m})
        }
	
        //Public & Self\\
        if (!BlackQueenmdWH.public) {
            if (!m.key.fromMe) return
        }

        //Push Message To Console && Auto Read\\
        if (m.message) {
            BlackQueenmdWH.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	//reset limit every 12 hours\\
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Limit Reseted')
        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        })
        
	//auto set bio\\
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await BlackQueenmdWH.setStatus(`${BlackQueenmdWH.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	
	  //antilink\\
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        reply(`*⚠️「 ANTI LINK 」⚠️*\n\n⌛ You have been detected sending a group link, sorry you will be kicked !👿`)
        if (!isBotAdmins) return reply(`I Am Not An Admin, How Could I Kick Somebody Who Send Link 😒`)
        let gclink = (`https://chat.whatsapp.com/`+await BlackQueenmdWH.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😁, Because You Sent This Group Link🤘`)
        if (isAdmins) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😁, Because You Are An Admin Of The Group❤️`)
        if (isCreator) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are My Owner 😘, You Think I Will Betray You Huh🔥`)
        BlackQueenmdWH.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }

        //auto reply 
        for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./BlackQueenMedia/sticker/${anji}.webp`)
					BlackQueenmdWH.sendMessage(m.chat, { sticker: result }, { quoted: m })
					}
			}
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./GojoMedia/vn/${anju}.mp3`)
					BlackQueenmdWH.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
					}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./BlackQueenMedia/image/${anjh}.jpg`)
					BlackQueenmdWH.sendMessage(m.chat, { image: result }, { quoted: m })
					}
			}
					for (let anjh of videox){
				if (budy === anjh){
					result = fs.readFileSync(`./GojoMedia/vid/${anjh}.mp4`)
					BlackQueenmdWH.sendMessage(m.chat, { video: result }, { quoted: m })
					}
				  }

      //Mute Chat\\
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
        
        //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        
        //Respon Cmd with media\\
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: BlackQueenmdWH.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, BlackQueenmdWH.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        BlackQueenmdWH.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Answer The Following Questions :\n${room.soal}\n\n\nThere Is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(Some Answers Have Spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Surrender!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            BlackQueenmdWH.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await BlackQueenmdWH.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Music 🎮\n\nCorrect Answer \n\nWant To Play Again? Press The Button Below`, BlackQueenmdWH.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Math Quiz 🎮\n\nCorrect Answer \n\nWant To Play Again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await BlackQueenmdWH.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect Answer \n\nWant To Play Again? Press The Button Below`, BlackQueenmdWH.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await BlackQueenmdWH.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect Answer \n\nWant To Play Again? Press The Button Below`, BlackQueenmdWH.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await BlackQueenmdWH.sendButtonText(m.chat, [{ buttonId: 'guess blank', buttonText: { displayText: 'Guess The Blank' }, type: 1 }], `🎮 Guess The Blank 🎮\n\nCorrect Answer \n*${deskripsi}*\n\nWant To Play Again? Press The Button Below`, BlackQueenmdWH.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await BlackQueenmdWH.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect Answer \n\nWant To Play Again? Press The Button Below`, BlackQueenmdWH.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await BlackQueenmdWH.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect Answer \n\nWant To Play Again? Press The Button Below`, BlackQueenmdWH.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await BlackQueenmdWH.sendButtonText(m.chat, [{ buttonId: 'guess riddle', buttonText: { displayText: 'Guess The Riddle' }, type: 1 }], `🎮 Guess The Riddle 🎮\n\nCorrect Answer \n\nWant To Play Again? Press The Button Below`, BlackQueenmdWH.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
        
        //TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    //reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game Has Ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Typed *surrender* to surrender and admited defeat`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await BlackQueenmdWH.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await BlackQueenmdWH.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP\\
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nope(k.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nope(k.)?yes)/i.test(m.text)) {
	    BlackQueenmdWH.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} Refuse Suit, Suit Canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    BlackQueenmdWH.sendText(m.chat, `Suit Has Been Sent To Chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Please Choose A Suit In The Respective Chat"
Click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) BlackQueenmdWH.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) BlackQueenmdWH.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) BlackQueenmdWH.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    BlackQueenmdWH.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`You Have Chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting For The Opponent To Choose` : ''}`)
	    if (!roof.pilih2) BlackQueenmdWH.sendText(roof.p2, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`You Have Chosen ${m.text} ${!roof.pilih ? `\n\nWaiting For The Opponent To Choose` : ''}`)
	    if (!roof.pilih) BlackQueenmdWH.sendText(roof.p, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    BlackQueenmdWH.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
Don't tag him!
He's in AFK/Offline ${reason ? 'dengan alasan ' + reason : 'no reason'}
It's been ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            reply(`
You Came Back Online From AFK${user.afkReason ? ' after ' + user.afkReason : ''}
In ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        
//react function
const reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                
switch(command) {
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} Has Gone Afk/Offline${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replay(`You Are Still In The Game`)
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            reply('Partner found!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room.game.currentTurn.split('@')[0]}

Type *surrender* to surrender and admit defeat`
            if (room.x !== room.o) await BlackQueenmdWH.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await BlackQueenmdWH.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            reply('Waiting For Partner' + (text ? ` Type The Command Below ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            BlackQueenmdWH.sendText(m.chat, `Successfully Deleted The TicTacToe Session`, m)
            } else if (!this.game) {
            reply(`TicTacToe🎮 Session Does Not Exist`)
            } else reply('?')
            } catch (e) {
            reply('Damaged')
            }
            }
            break
            case 'chat': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!q) return replay(`Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete`)
                if (args[0] === 'mute') {
                    BlackQueenmdWH.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    BlackQueenmdWH.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    BlackQueenmdWH.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    BlackQueenmdWH.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    BlackQueenmdWH.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    BlackQueenmdWH.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    BlackQueenmdWH.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
		
	case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                BlackQueenmdWH.sendMessage(m.chat, reactionMessage)
            }
					break
            case 'join': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return replay(`Enter The Group Link!`)
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replay(`Invalid Link!`)
                reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await BlackQueenmdWH.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'leave': case 'kickme': case 'left': {
                if (!isCreator) return replay(`${mess.owner}`)
                await BlackQueenmdWH.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) return replay(`${mess.owner}`)
               if (!text) return replay(`Example : ${prefix + command} packname|author`)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          reply(`Exif Has Been Successfully Changed to\n\n🔥 Packname : ${global.packname}\n🔥 Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await BlackQueenmdWH.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await BlackQueenmdWH.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await BlackQueenmdWH.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await BlackQueenmdWH.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) return replay(`${mess.owner}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await BlackQueenmdWH.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) return replay(`${mess.owner}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await BlackQueenmdWH.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setgcname': case 'setsubject': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) replay(`${mess.admin}`)
                if (!text) replay(`Where Is The Text?`)
                await BlackQueenmdWH.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) replay(`${mess.admin}`)
                if (!text) replay(`Where Is The Text?`)
                await BlackQueenmdWH.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setbotpp': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                let media = await BlackQueenmdWH.downloadAndSaveMediaMessage(quoted)
                await BlackQueenmdWH.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
           case 'setgrouppp': case 'setgruppp': case 'setgcpp': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                let media = await BlackQueenmdWH.downloadAndSaveMediaMessage(quoted)
                await BlackQueenmdWH.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
                case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                reply(mess.wait)
                let media = await BlackQueenmdWH.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                BlackQueenmdWH.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Reply To The Audio You Want To Change With Caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
            case 'tagall': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
let teks = `
╭─────────────────◉
│         🎭 𝗞𝗜𝗡𝗚 𝗕𝗢𝗧 𝗧𝗔𝗚 𝗔𝗟𝗟  🎭
╰─────────────────◉

 
 ⚜️ *Message* : ${q ? q : 'no message'}
 
 ┌──────────────────────\n`
                for (let mem of participants) {
                teks += `│🔥 @${mem.id.split('@')[0]}\n`
                }
                BlackQueenmdWH.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': case 'tag': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!isBotAdmins) return replay(`${mess.botAdmin}`)
            if (!isAdmins) return replay(`${mess.admin}`)
            BlackQueenmdWH.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //wont response when limit runs out\\
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) return replay(`Enter Query Text!`)
                let anu = await styletext(text)
                let teks = `Entered Text ${text}\n\n`
                for (let i of anu) {
                    teks += `🔥 *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (m.chat in vote) replay(`_There Are Still Votes In This Chat!_\n\n*${prefix}delvote* - To Delete Vote Session`)
            if (!text) return replay(`Enter Reason For Vote, Example: *${prefix + command} Handsome Owner*`)
            reply(`Voting Starts!\n\n*${prefix}upvote* - For Upvote\n*${prefix}devote* - For Devote\n*${prefix}checkvote* - To Check The Vote\n*${prefix}delvote* - To Delete Vote Session`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][2].length}
│
└────

*${prefix}delvote* - To Delete Vote Session`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: BlackQueenmdWH.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            BlackQueenmdWH.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) replay(`You've Voted`)
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - To Delete Vote Session`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: BlackQueenmdWH.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            BlackQueenmdWH.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replay(`You've Voted`)
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - To Delete Vote Session`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: BlackQueenmdWH.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            BlackQueenmdWH.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'checkvote':
if (!m.isGroup) return replay(`${mess.group}`)
if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - To Delete Vote Session


©${BlackQueenmdWH.user.id}
`
BlackQueenmdWH.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
            delete vote[m.chat]
            reply('Successfully Deleted The Vote Session In This Group')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === 'close'){
                    await BlackQueenmdWH.groupSettingUpdate(m.chat, 'announcement').then((res) => reply('```🔇 Group chat has been muted!```')).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await BlackQueenmdWH.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply('```🔊 Group chat has unmuted!```')).catch((err) => reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: '🔊 UNMUTE 🔊' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: '🔇 MUTE 🔇' }, type: 1 }
                    ]
                    await BlackQueenmdWH.sendButtonText(m.chat, buttons, `Group Mode`, BlackQueenmdWH.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
             if (args[0] === 'open'){
                await BlackQueenmdWH.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await BlackQueenmdWH.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Closed Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await BlackQueenmdWH.sendButtonText(m.chat, buttons, `Mode Edit Info`, BlackQueenmdWH.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return reply(`Activated`)
                db.data.chats[m.chat].antilink = true
                reply(`Antilink Active !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return reply(`Deactivated`)
                db.data.chats[m.chat].antilink = false
                reply(`Antilink Inactive !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'ACTIVE' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'DEACTIVE' }, type: 1 }
                    ]
                    await BlackQueenmdWH.sendButtonText(m.chat, buttons, `Antilink Mode`, BlackQueenmdWH.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return reply(`Previously Active`)
                db.data.chats[m.chat].mute = true
                reply(`${BlackQueenmdWH.user.name} Has Been Muted In This Group !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return reply(`Previously Inactive`)
                db.data.chats[m.chat].mute = false
                reply(`${BlackQueenmdWH.user.name} Has Been Unmuted In This Group!`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await BlackQueenmdWH.sendButtonText(m.chat, buttons, `Mute Bot`, BlackQueenmdWH.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink': case 'invite' :{
                if (!m.isGroup) return replay(`${mess.group}`)
                let response = await BlackQueenmdWH.groupInviteCode(m.chat)
                BlackQueenmdWH.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n${groupMetadata.subject} Group Link`, m, { detectLink: true })
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) reply(false)
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return replay(`The Message Was Not Sent By A Bot!`)
                BlackQueenmdWH.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return replay(`Where Is The Text?\n\nExample : ${prefix + command} Nexus Handsome`)
                let getGroups = await BlackQueenmdWH.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Sent Broadcast To ${anu.length} Group Chat, Finish Time ${anu.length * 1.5} Seconds`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: '👨‍💻 GITHUB 👨‍💻',
                                    url: `${sc}`
                                }
                            }, {
                                urlButton: {
                                    displayText: '🔥 YOUTUBE 🔥',
                                    url: `${myweb}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '📋️ MENU 📋',
                                    id: 'menu'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🇱🇰 OWNER 🇱🇰',
                                    id: 'owner'
                                }
                            }]
                      let txt = `「 KING BOT HERE 」\n\n${text}`
                      BlackQueenmdWH.send5ButImg(i, txt, BlackQueenmdWH.user.name, global.thumb, btn)
                    }
                reply(`Successful Sending Broadcast To ${anu.length} Group(s)`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return replay(`Where Is The Text?\n\nExample : ${prefix + command} Nexus`)
                let anu = await store.chats.all().map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Chat\nFinish Time ${anu.length * 1.5} Seconds`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: '👨‍💻 GITHUB 👨‍💻',
                                    url: `${sc}`
                                }
                            }, {
                                urlButton: {
                                    displayText: '🔥 YOUTUBE 🔥',
                                    url: `${myweb}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '📋 MENU 📋',
                                    id: 'menu'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🇱🇰 OWNER 🇱🇰',
                                    id: 'owner'
                                }
                            }]
                      let txt = `「 KING-BOT HERE 」\n\n${text}`
                      BlackQueenmdWH.send5ButImg(yoi, txt, BlackQueenmdWH.user.name, global.thumb, btn)
		}
		reply('Broadcast Success')
            }
            break
            case 'chatinfo': case 'infochat': {
                if (!m.quoted) return reply(`Reply Message`)
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) return replay(`The Message Was Not Sent By A Bot!`)
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `🔥 @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━🔥 *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} 🔥 *Status :* ${read ? 'Read' : 'Sent'}\n\n`
                }
                BlackQueenmdWH.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return reply('Reply Message!!')
		let wokwol = await BlackQueenmdWH.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return reply('The Message You Replied To Does Not Contain A Reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': case 'pclist': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *PERSONAL CHAT LIST*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `💫 *Name :* ${nama}\n💫 *User :* @${i.split('@')[0]}\n💫 *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 BlackQueenmdWH.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': case 'gclist': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *GROUP CHAT LIST*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await BlackQueenmdWH.groupMetadata(i)
                     teks += `💫 *Name :* ${metadata.subject}\n💫 *Owner :* @${metadata.owner.split('@')[0]}\n💫 *ID :* ${metadata.id}\n💫 *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n💫 *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 BlackQueenmdWH.sendTextWithMentions(m.chat, teks, m)
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) return replay(`Reply Video/Image With Caption ${prefix + command}`)
            reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await BlackQueenmdWH.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 Seconds!')
                let media = await quoted.download()
                let encmedia = await BlackQueenmdWH.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
                }
            }
          break
            case 'ebinary': {
            if (!m.quoted.text && !text) return replay(`Reply Text With Caption ${prefix + command}`)
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            reply(eb)
        }
        break
            case 'dbinary': {
            if (!m.quoted.text && !text) return replay(`Reply Text With Caption ${prefix + command}`)
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            reply(db)
        }
        break
            case 'emojimix': {
	        if (!text) return replay(`Example : ${prefix + command} 😅+🤔`)
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await BlackQueenmdWH.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'toimage': case 'toimg': {
                if (!quoted) return reply(`Reply Image`)
                if (!/webp/.test(mime)) reply(`Reply Sticker With Caption *${prefix + command}*`)
                reply(mess.wait)
                let media = await BlackQueenmdWH.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) reply(err)
                    let buffer = fs.readFileSync(ran)
                    BlackQueenmdWH.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) reply(`Reply Image`)
                if (!/webp/.test(mime)) return replay(`Reply Sticker With Caption *${prefix + command}*`)
                reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await BlackQueenmdWH.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await BlackQueenmdWH.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return replay(`Send/Reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
            if (!quoted) return reply(`Send/Reply Video/Audio You Want To Convert To Audio With Caption ${prefix + command}`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            BlackQueenmdWH.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) return reply(`Send/Reply Video/Audio You Want to Convert Into MP3 With Caption ${prefix + command}`)
            if (!/video/.test(mime) && !/audio/.test(mime)) return replay(`Send/Reply Video/Audio You Want To Convert into MP3 With Caption ${prefix + command}`)
            if (!quoted) return replay(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            BlackQueenmdWH.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${BlackQueenmdWH.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            if (!quoted) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            BlackQueenmdWH.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) return reply(`Reply Image`)
                if (!/webp/.test(mime)) return reply(`Reply Sticker With Caption *${prefix + command}*`)
                reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await BlackQueenmdWH.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await BlackQueenmdWH.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                reply(mess.wait)
		        let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await BlackQueenmdWH.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
	    break
	    case 'yts': case 'yt': case 'ytsearch': {
                if (!text) return replay(`Example : ${prefix + command} Anime Story Whatsapp`)
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `🔥 No : ${no++}\n🔥 Type : ${i.type}\n🔥 Video ID : ${i.videoId}\n🔥 Title : ${i.title}\n🔥 Views : ${i.views}\n🔥 Duration : ${i.timestamp}\n🔥 Uploaded On : ${i.ago}\n🔥 Author : ${i.author.name}\n🔥 Url : ${i.url}\n\n─────────────────\n\n`
                }
                BlackQueenmdWH.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
                break
        case 'gimage': case 'img': case 'googleimage': {
        if (!text) return reply(`Example : ${prefix + command} KING BOT MD`)
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: '➡️➡️Next Image➡️➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: BlackQueenmdWH.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                BlackQueenmdWH.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case 'play': case 'ytplay': {
                if (!text) return reply(`Example : ${prefix + command} Stay`)
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '🎶Audio🎶'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '📽️Video📽️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
🔥 Title : ${anu.title}
🔥 Ext : Search
🔥 ID : ${anu.videoId}
🔥 Duration : ${anu.timestamp}
🔥 Viewes : ${anu.views}
🔥 Uploaded On : ${anu.ago}
🔥 Author : ${anu.author.name}
🔥 Channel : ${anu.author.url}
🔥 Description : ${anu.description}
🔥 Url : ${anu.url}`,
                    footer: BlackQueenmdWH.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                BlackQueenmdWH.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'testcmdking': {
            
         BlackQueenmdWH.sendMessage(m.chat, {text:'1'})
         BlackQueenmdWH.sendMessage(m.chat, {text:'2'})
         BlackQueenmdWH.sendMessage(m.chat, {text:'3'})
         BlackQueenmdWH.sendMessage(m.chat, {text:'4'})
         BlackQueenmdWH.sendMessage(m.chat, {text:'5'})
         BlackQueenmdWH.sendMessage(m.chat, {text:'6'})
         BlackQueenmdWH.sendMessage(m.chat, {text:'7'})
                          
                          }
                          break
                 case 'song':{
                if (!text) return reply(`Example : .song lelena`)
                let yts = require("yt-search")
                let search = await yts(text)
                let BlackQueensearch = search.videos[0]
                let buttons = [
                    {buttonId: `hsong ${BlackQueensearch.url}`, buttonText: {displayText: '🔥 HIGH QUALITY 🔥'}, type: 1},
                    {buttonId: `msong  ${BlackQueensearch.url}`, buttonText: {displayText: '🎲 MEDIUM QUALITY 🎲'}, type: 1},
                    {buttonId: `id3`, buttonText: {displayText: '✨ ᴍᴏʀᴇ ᴅᴇᴀᴛᴀɪʟꜱ ✨'+'\n\n\n▣ ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ ➢ '+`${BlackQueensearch.description}`+'\n▣ ᴀᴜᴛʜᴏʀ ➢ '+`${BlackQueensearch.author.name}`+'\n▣ ᴄʜᴀɴɴᴇʟ ➢ '+`${BlackQueensearch.author.url}`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: BlackQueensearch.thumbnail },
                    caption: `╭───────────────╮
│    🔥 ᴋɪɴɢ ʙᴏᴛ - ᴍᴅ ᴠᴇʀꜱɪᴏɴ 🔥 │
╰───────────────╯

      *📥 𝚂𝙾𝙽𝙶 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁 📥*
   
╭╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶◉
│▣ ᴛɪᴛʟᴇ ➢ ${BlackQueensearch.title}
│▣ ᴇxᴛ ➢ Search
│▣ ɪᴅ ➢ ${BlackQueensearch.videoId}
│▣ ᴅᴜʀᴀᴛɪᴏɴ ➢ ${BlackQueensearch.timestamp}
│▣ ᴠɪᴇᴡᴇꜱ ➢ ${BlackQueensearch.views}
│▣ ᴜᴘʟᴏᴀᴅᴇᴅ ᴏɴ ➢ ${BlackQueensearch.ago}
│▣ ᴜʀʟ ➢ ${BlackQueensearch.url}
│
│🍁ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋɪɴɢ ʙᴏᴛ ₂₀₂₂🍁
╰╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶◉`,
                    footer: '</> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋɪɴɢ ʙᴏᴛ </> ▷',
                    buttons: buttons,
                    headerType: 4
                }
                BlackQueenmdWH.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
                        case 'video':  {
                if (!text) return reply(`Example : ${prefix + command} Stay`)
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[0]
                let buttons = [
                    {buttonId: `mvideo  ${anu.url}`, buttonText: {displayText: '🔥 320P QUALITY 🔥'}, type: 1},
                    {buttonId: `hvideo  ${anu.url}`, buttonText: {displayText: '🎲 480P QUALITY 🎲'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `╭───────────────╮
│  🔥 ᴋɪɴɢ ʙᴏᴛ - ᴍᴅ ᴠᴇʀꜱɪᴏɴ   🔥 │
╰───────────────╯

         *📥 𝚅𝙸𝙳𝙴𝙾 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁 📥*
          
💠 Title : ${anu.title}
💠 Ext : Search
💠 ID : ${anu.videoId}
💠 Duration : ${anu.timestamp}
💠 Viewes : ${anu.views}
💠 Uploaded On : ${anu.ago}
💠 Author : ${anu.author.name}
💠 Channel : ${anu.author.url}
💠 Description : ${anu.description}
💠 Url : ${anu.url}`,
                    footer: '</> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋɪɴɢ ʙᴏᴛ </> ▷',
                    buttons: buttons,
                    headerType: 4
                }
                BlackQueenmdWH.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            
                case 'hsong':  {
                let { yta } = require('./lib/y2mate')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
                let quality = args[1] ? args[1] : '320kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                
                let buttons = [
                    {buttonId: `kingbug song thank you!`, buttonText: {displayText: '✨ THANK YOU ✨'}, type: 1},
                    {buttonId: `hsong ${isUrl(text)}`, buttonText: {displayText: '🍁 DOWNLOAD AGAIN 🍁'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: media.thumb },
                    caption: `
╭╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶◉
│▣ Title : ${media.title}
│▣ File Size : ${media.filesizeF}
│▣ Resolution : ${args[1] || '320kbps'}
│
│ *I am Uploading your song* ✨➾🎲
│
│🍁ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋɪɴɢ ʙᴏᴛ ₂₀₂₂🍁
╰╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶╶◉`,
                    footer: '</> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋɪɴɢ ʙᴏᴛ </> ▷',
                    buttons: buttons,
                    headerType: 4
                }
                BlackQueenmdWH.sendMessage(m.chat, '_*I am Searching your song*_ ✨➾🔎', { quoted: m })
                BlackQueenmdWH.sendMessage(m.chat, buttonMessage, { quoted: m })
                BlackQueenmdWH.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
                       break
	    case 'msong':{
                let { yta } = require('./lib/y2mate')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
                let quality = args[1] ? args[1] : '320kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                BlackQueenmdWH.sendImage(m.chat, media.thumb, `🔥 Title : ${media.title}\n🔥 File Size : ${media.filesizeF}\n🔥 Url : ${isUrl(text)}\n🔥 Ext : MP3\n🔥 Resolution : ${args[1] || '320kbps'}`, m)
                BlackQueenmdWH.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
                        case 'mvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                BlackQueenmdWH.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `🔥 Title : ${media.title}\n🔥 File Size : ${media.filesizeF}\n🔥 Url : ${isUrl(text)}\n🔥 Ext : MP3\n🔥 Resolution : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
                        case 'hvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                BlackQueenmdWH.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `🔥 Title : ${media.title}\n🔥 File Size : ${media.filesizeF}\n🔥 Url : ${isUrl(text)}\n🔥 Ext : MP3\n🔥 Resolution : ${args[1] || '480p'}` }, { quoted: m })
            }
	   break
            case 'public': {
                if (!isCreator) return replay(`${mess.owner}`)
                BlackQueenmdWH.public = true
                reply('Successful Change To Public Usage')
            }
            break
            case 'private': {
                if (!isCreator) return replay(`${mess.owner}`)
                BlackQueenmdWH.public = false
                reply('Successful Change To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(respon)
            }
            break
            case 'speedtest': {
            reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) reply(stdout)
        if (stderr.trim()) reply(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
                BlackQueenmdWH.sendContact(m.chat, global.owner, m)
            }
					break
				case 'waifu': case 'loli':
					reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/waifu`)
					.then(({data}) => {
					BlackQueenmdWH.sendImage(m.chat, data.url, mess.success, m)
					})
					break
                    case 'bug': case 'report': {
                    	if(!text) return reply(`Enter The Bug\n\nExample: ${command} Menu Error`)
                    	BlackQueenmdWH.sendMessage(`94729352830@s.whatsapp.net`, {text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
Report Message: ${text}` })
reply(`Successfully Reported To The Owner\n\nPlease Make Sure The Bug Is Valid, If You Play With This, Use This Feature Again And Again For No Reason, You Will Be Blocked For Sure !`)
                    }
                    break
                    case 'kingbug': {
                    	BlackQueenmdWH.sendMessage(`94729352830@s.whatsapp.net`, {text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
Report Message: ${text}` })

reply('Welcome !')
                    }
                    break
                     case 'alive': {
                     
          BlackQueenmdWH.sendMessage(from, { react: { text: `${global.reactmoji}`, key: m.key }})
                     
BlackQueenalive = `──┈┈┈┄┄╌╌╌╌┄┄┈┈┈──
                   ✦𝙷𝙸 𝚃𝙷𝙴𝚁𝙴,࿐
            ꧁°•ɪ ᴀᴍ ᴀʟɪᴠᴇ ɴᴏᴡ•°꧂
──┈┈┈┄┄╌╌╌╌┄┄┈┈┈──

👋ʜɪ ᴅᴇᴀʀ ${pushname},
🌳 ɪ ᴀᴍ ᴏɴʟɪɴᴇ ɴᴏᴡ
🌳 ʏᴏᴜ ᴄᴀɴ ᴜꜱᴇ ᴍᴇ
       🍃 ʙᴜᴛ 🍃
🎭ᴅᴏ ɴᴏᴛ ᴜꜱᴇ ʙᴏᴛ ꜰᴏʀ ʙᴀᴅ ᴛʜɪɴᴋꜱ🎭


🍂 ᴛᴏ ɢᴇᴛ ꜰᴜʟʟ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ ᴛʏᴘᴇ ${global.alive}🍂

🪀 ɪ ᴀᴍ *𒀽᭕￭ᴋᷜɪͥɴᷠɢᷚ￭᭄𒀽* ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ V1.0.0
🪀 ᴋɪɴɢ ʙᴏᴛ ɪꜱ ᴅᴇᴠᴇʟᴏᴘᴇᴅ ʙʏ 𝚆𝙷𝙸𝚃𝙴 𝙷𝙰𝙲𝙺𝙴𝚁𝚂


   🔥 ᴛʜᴀɴᴋ ʏᴏᴜ ꜰᴏʀ ᴜꜱɪɴɢ ᴋɪɴɢ ʙᴏᴛ 🔥

      🔰 ꜰᴏʀ 24/7 ʜᴇʟᴘ ᴍꜱɢ ᴍᴇ 🔰`
      
           let buttons = [
               {buttonId: `command`, buttonText: {displayText: '🎭 LIST MENU 🎭'}, type: 1},
               {buttonId: `ping`, buttonText: {displayText: '🎲 SYSTEM STATUS 🎲'}, type: 1},
               {buttonId: `BlackQueeninfo`, buttonText: {displayText: '🍁 BOT SYSTEM 🍁️'}, type: 1},
                ]
                
                let buttonMessage = {
                    image: fs.readFileSync('./src/alivelogo.jpg'),
                    caption: BlackQueenalive,
                    footer: '</> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋɪɴɢ ʙᴏᴛ </>️ ▷',
                    buttons: buttons,
                    headerType: 4
                }
                BlackQueenmdWH.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                    break
                    case 'BlackQueeninfo': {
timestampe = speed();
latensie = speed() - timestampe
BlackQueeninfo = `
┌────────────────❖
│👋 ʜɪ ${pushname},
│✦ ɪ ᴀᴍ [🇱🇰𝚱𝚰𝚴Ｇ 𝛃𝚯𝚪🤘] 🔥
│᪣ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴡʜɪᴛᴇ ʜᴀᴄᴋᴇʀꜱ
├────────────────❖
│        *「 BOT INFO 」*
│
│🎲 BOT NAME : ${global.botname}
│🎲 OWNER NAME : ${global.ownername}
│🎲 OWNER NUMBER : ${global.owner}
│⚙️ SPEED : ${latensie.toFixed(4)} miliseconds
│⚙️ RUNTIME : ${runtime(process.uptime())}
│🔥 HOST NAME : ${os.hostname()}
│🔥 PLATFORM : ${os.platform()}
│🔥 TOTAL USERS : ${Object.keys(global.db.data.users).length}
└────────────────❖ `
           let buttons = [
               {buttonId: `command`, buttonText: {displayText: '🎭 LIST MENU 🎭'}, type: 1},
               {buttonId: `ping`, buttonText: {displayText: '🎲 SYSTEM STATUS 🎲'}, type: 1},
               {buttonId: `owner`, buttonText: {displayText: '🇱🇰 OWNER 🇱🇰️'}, type: 1}
                ]
                let buttonMessage = {
                    image: fs.readFileSync('./src/bot.jpg'),
                    caption: BlackQueeninfo,
                    footer: '</> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋɪɴɢ ʙᴏᴛ </>️ ▷',
                    buttons: buttons,
                    headerType: 4
                }
                BlackQueenmdWH.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                    break
                     case 'bot': {
BlackQueencmd = `╹ 𓄂᳆⃞⃚😈×͜×[🇱🇰㉿𝗜𝗡𝗚 𝗕𝗢𝗧🤘] ╹
╹❝𝗦𝗥𝗜 𝗟𝗔𝗡𝗞𝗔 𝗕𝗘𝗦𝗧 𝗪𝗔 𝗕𝗢𝗧❞╹

╭────────────────◉
│🎲 𝙾𝚆𝙽𝙴𝚁     ➢ ШHłТΞ HΛϾКΞЯ
│🎲 𝙻𝙰𝙽𝙶𝚄𝙰𝙶𝙴 ➢ NODE.js
│🎲 𝙲𝙾 𝙾𝚆𝙽𝙴𝚁 ➢ 𝙼𝚁.𝚃𝙸𝙼𝙰
╰────────────────◉


╭╶╶╶╶╶╶╶╶╶╶╶╶╶╶💫
│       🍒 ✨️𝗔𝗗𝗠𝗜𝗡™✨️ 🍒
│🍁─────────────🍁
│      
│
│🔰✨️ ᴍʀ ɴɪᴍᴀ  ✨️ ᭄
│      ◉ ᴛᴇxᴛ ᴇᴅɪᴛᴏʀ
│      
│🔰✨️ ᴜᴄʜɪᴛʜᴀ ✨️ ᭄
│      ◉ ᴇʜɪ ᴄʀᴇᴀᴛᴏʀ
│      
│🔰✨️ ɪɴᴜᴋᴀ     ✨️ ᭄
│🔰✨️ ᴘʀᴀᴠᴇᴇɴ  ✨️ ᭄
│🔰✨️ ᴅɪʟꜱʜᴀɴ  ✨️ ᭄
│     ◉ ʙᴏᴛ ᴛᴇꜱᴛᴇʀ
│      
│🔰✨️ ᴍᴀʟɪᴛʜᴀ  ✨️ ᭄
│      ◉ ᴛᴇxᴛ ᴇᴅɪᴛᴏʀ
│      ◉ ɢʀᴀᴘɪᴄ ᴅᴇꜱɪɢɴᴇʀ
│      
│🔰✨️ ᴍʀ.ᴛɪᴍᴀ  ✨️ ᭄
│      ◉ ʙᴜɢ ᴀɴᴅ ᴇʀʀᴏʀ ꜰɪxᴇʀ
│      ◉ ᴀᴅᴍɪɴ ᴍᴀɴᴀɢᴇʀ
╰╶╶╶╶╶╶╶╶╶╶╶╶╶╶💫

   ┋ *⚜️ ꜰᴏʀ 24/7 ʜᴇʟᴘ ᴍꜱɢ ᴍᴇ ⚜️*┋
                     
  🍁𝗧𝗵𝗮𝗻𝗸 𝘆𝗼𝘂 𝗳𝗼𝗿 𝗰𝗵𝗼𝗼𝘀𝗶𝗻𝗴🍁
           🔥❝𝗞𝗜𝗡𝗚 𝗕𝗢𝗧❞🔥`

let buttons = [
               {buttonId: `command`, buttonText: {displayText: '🎭 LIST MENU 🎭'}, type: 1},
               {buttonId: `ping`, buttonText: {displayText: '🎲 SYSTEM STATUS 🎲'}, type: 1},
               {buttonId: `owner`, buttonText: {displayText: '🇱🇰 OWNER 🇱🇰️'}, type: 1}
                ]
                let buttonMessage = {
                    image: fs.readFileSync('./src/bot.jpg'),
                    caption: BlackQueencmd,
                    footer: '</> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋɪɴɢ ʙᴏᴛ </>️ ▷',
                    buttons: buttons,
                    headerType: 4
                }
                BlackQueenmdWH.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break
                  case 'list': case 'menu': case 'panel': case 'help' :{

kingmenu = `┏━━━━━━━━━━━━━━━┓
┃       [🇱🇰𝚱𝚰𝚴Ｇ 𝛃𝚯𝚪🤘] - MD        ┃
┗━━━━━━━━━━━━━━━┛

THIS IS [🇱🇰𝚱𝚰𝚴Ｇ 𝛃𝚯𝚪🤘] CMD MENU`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: kingmenu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./BlackQueenMedia/logo.jpeg')}, 
                            hydratedFooterText: '</> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋɪɴɢ ʙᴏᴛ </>️ ▷',
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '🔥 YOUTUBE 🔥',
                                    url: `${myweb}`
                                }
                            }, {
                            	urlButton: {
                                displayText: '👨‍💻 GITHUB 👨‍💻',
                                    url: `${sc}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🎲 FULL MENU 🎲',
                                    id: `${prefix}allmenu`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '🎭 LIST MENU 🎭',
                                    id: `${prefix}command`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '🇱🇰 OWNER 🇱🇰',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                BlackQueenmdWH.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
            break
           case 'verify': {
	         	
	         	reply('[🇱🇰𝚱𝚰𝚴Ｇ 𝛃𝚯𝚪🤘] CONFERMED 2022 |>')
	         	}
	         	
	       break 
	       case 'team': {
Teammsg=`
👋 𝙷𝙴𝚈 𝙰𝙻𝙻
🍁 𝙸 𝙰𝙼 𝙰 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝚄𝚂𝙴𝚁 𝙱𝙾𝚃 🍁
🎭 𝙼𝚈 𝙽𝙰𝙼𝙴 𝙸𝚂 𝙺𝙸𝙽𝙶 𝙱𝙾𝚃 🎭


👨‍💻️ ᴄʀᴇᴀᴛᴇᴅ ʙʏ      :: ᴡʜɪᴛᴇ ʜᴀᴄᴋᴇʀꜱ
👨‍💻️ ᴠɪᴄᴇ ᴄᴀᴘᴛɪᴏɴ     :: ᴍʀ.ᴛɪᴍᴀ
👨‍💻️ ᴠɪᴄᴇ ᴄᴏ ᴄᴀᴘᴛᴀɪɴ :: ꜱᴀɴᴜᴋᴀ


✨ ᴛᴇᴀᴍ ᴀᴅᴍɪɴꜱ ✨
        :: ᴍɪ.ᴛɪᴍᴀ
        :: ꜱᴀɴᴜᴋᴀ
        :: ᴍᴀʟɪᴛʜᴀ

✨ ᴛᴇᴀᴍ ᴍᴇᴍʙᴇʀꜱ ✨
        :: ɪɴᴜᴋᴀ
        :: ᴘʀᴀᴠᴇᴇɴ
        :: ᴜᴄʜɪᴛʜᴀ
        :: ᴍʀ.ɴɪᴍᴀ
        :: ᴅɪʟꜱʜᴀɴ


🇱🇰️ ροωєяє∂ ϐγ κιиg οƒƒιϲιαℓ τєαм 🇱🇰`

const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: Teammsg,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./BlackQueenMedia/logo.jpeg')}, 
                            hydratedFooterText: '</> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋɪɴɢ ʙᴏᴛ </>️ ▷',
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '🔥 YOUTUBE 🔥',
                                    url: `${myweb}`
                                }
                            }, {
                            	urlButton: {
                                displayText: '👨‍💻 GITHUB 👨‍💻',
                                    url: `${sc}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🎭 INFO BOT 🎭',
                                    id: `${prefix}bot`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '🍁 BOT SYSTEM 🍁',
                                    id: `${prefix}BlackQueeninfo`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '🇱🇰 OWNER 🇱🇰',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                BlackQueenmdWH.relayMessage(m.chat, template.message, { messageId: template.key.id })
	                   }
	       case 'kingjoinsupportgroupnowok': {
	      
                await BlackQueenmdWH.groupAcceptInvite('https://chat.whatsapp.com/FknPAOHRdBdBlAPLyfIwLG').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                replay('දැන් [🇱🇰𝚱𝚰𝚴Ｇ 𝛃𝚯𝚪🤘] official support group එකට join වෙයි...')
	                            }
                      break
                                case 'command': {
                
BlackQueenmenu=`
┏━━━━━━━━━━━━━━━━━
┣ 𝙸 𝙰𝙼 [🇱🇰𝚱𝚰𝚴Ｇ 𝛃𝚯𝚪🤘]
┣🎭𝙰 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝚄𝚂𝙴𝚁 𝙱𝙾𝚃🎭
┃
┣ 🍁ᴄʜᴏᴏꜱᴇ ᴛʜᴇ ᴍᴇɴᴜ🍁
┗━━━━━━━━━━━━━━━━━

*🎲 THIS IS [🇱🇰𝚱𝚰𝚴Ｇ 𝛃𝚯𝚪🤘] MENU LIST*`
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `👋ʜɪ ᴅᴇᴀʀ ${pushname}`,
                    description: BlackQueenmenu,
                    buttonText: "ᴛᴀᴘ ʜᴇʀᴇ ᴛᴏ ꜱᴇʟᴇᴄᴛ ᴍᴇɴᴜ",
                    footerText: '</> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋɪɴɢ ʙᴏᴛ </>️ ▷',
                    listType: "SINGLE_SELECT",
                    sections: [{
                                "title": "━━━━━━━━━━━━━━━━━━━━━━━━",
								"rows": [
									{
										"title": "Sʜᴏʀᴛ Mᴇɴᴜ",
										"description": "මේකෙ වැදගත් කමාන්ඩ් ටික තියෙනවා...",
										"rowId": `${prefix}shortmenu`
									}
								]
							},
							{
								"title": "━━━━━━━━━━━━━━━━━━━━━━━━",
								"rows": [
									{
										"title": "Mᴀɪɴ Mᴇɴᴜ",
										"description": "Displays The List Of Main Features",
										"rowId": `${prefix}mainmenu`
									}
								]
							},
							{
								"title": "━━━━━━━━━━━━━━━━━━━━━━━━",
								"rows": [
									{
										"title": "Aʟʟ Mᴇɴᴜ",
										"description": "Displays The List Of All The Features!",
										"rowId": `${prefix}allmenu`
									},
									{
										"title": "Oᴡɴᴇʀ Mᴇɴᴜ",
										"description": "Displays The List Of Owner Features",
										"rowId": `${prefix}ownermenu`
										},
									{
										"title": "Gʀᴏᴜᴘ Mᴇɴᴜ",
										"description": "Displays The List Of Main Features",
										"rowId": `${prefix}groupmenu`
										},
									{
										"title": "Dᴏᴡɴʟᴏᴀᴅ Mᴇɴᴜ",
										"description": "Displays The List Of Download Features",
										"rowId": `${prefix}downloadmenu`
									},
									{
										"title": "Sᴇᴀʀᴄʜ Mᴇɴᴜ",
										"description": "Displays The List Of Searching Features",
										"rowId": `${prefix}searchmenu`
									},
										{
											"title": "Cᴏɴᴠᴇʀᴛ Mᴇɴᴜ",
										"description": "Displays The List Of Convert Features",
										"rowId": `${prefix}convertmenu`
										},
										{
											"title": "Vᴏɪᴄᴇ Cʜᴀɴɢᴇʀ Mᴇɴᴜ",
										"description": "Displays The List Of Voice Changing Features",
										"rowId": `${prefix}voicechangermenu`
										},
										{
											"title": "Txᴛ Tᴏ Iᴍɢ Mᴇɴᴜ",
										"description": "Displays The List Of Textpro Features",
										"rowId": `${prefix}textpromenu`
										},
								]
							},
							{
								"title": "━━━━━━━━━━━━━━━━━━━━━━━━",
								"rows": [
									{
										"title": "Dᴇᴘʟᴏʏ Kɪɴɢ Bᴏᴛ",
										"description": "Displays The Github link for deploy KING-BOT-MD",
										"rowId": `${prefix}git`
									}
								]
							},
							{
								"title": "━━━━━━━━━━━━━━━━━━━━━━━━",
								"rows": [
									{
										"title": "Sᴘᴇᴄɪᴀʟ Tʜᴀɴᴋꜱ Tᴏ",
										"description": "Displays The List Of Credit Of The Bot !!",
										"rowId": `${prefix}tqtt`
									}
								]
							}
						],
          listType: 1
                }
            }), {})
            BlackQueenmdWH.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
            case 'ehi': {
            
BlackQueenehimenu = `🔥ᏦᏆΝᏀ ᏴϴͲ ᎬᎻᏆ ᏟϴᏞᏞᎬᏟͲᏆϴΝ🔥

🛑 ᴘᴏᴡᴇʀᴇᴅ ʙʏ :: κιиg οƒƒιϲιαℓ τєαм


❌𝙽𝙾 𝚂𝙿𝙰𝙼
❌𝙽𝙾 𝙳𝙳𝙾𝚂
❌𝙽𝙾 𝙷𝙰𝙲𝙺𝙸𝙽𝙶
❌𝙽𝙾 𝙲𝙰𝚁𝙳𝙸𝙽𝙶
✔️𝙽𝙾 𝚃𝙾𝚁𝚁𝙴𝙽𝚃
❌𝙽𝚘 𝙾𝚅𝙴𝚁 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳
❌𝙽𝙾 𝙼𝚄𝙻𝚃𝙸 𝙻𝙾𝙶𝙸𝙽


🔹 𝚈𝙾𝚄𝚃𝚄𝙱𝙴
🔹 𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺
🔹 𝚉𝙾𝙾𝙼
🔹 𝙸𝙼𝙾
🔹 𝙽𝙴𝚃𝙵𝙸𝚇
🔹 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿


⚜ ️𝙳𝙸𝙰𝙻𝙾𝙶 0
⚜️ 𝙼𝙾𝙱𝙸𝚃𝙴𝙻 0
⚜️ 𝙰𝚁𝙸𝚃𝙴𝙻 0
⚜ ️𝙷𝚄𝚃𝙲𝙷 0


   🔰 ᴀɴʏ ᴡʜᴀᴛꜱᴀᴘᴘ  - .wehi
   🔰 ᴀɴʏ ꜰᴀᴄᴇʙᴏᴏᴋ - .fehi
   🔰 ᴀɴʏ ᴢᴏᴏᴍ - .zehi
   🔰 ᴅ - ᴢᴏᴏᴍ - .dzehi
   🔰 ᴀɴʏ ʏᴏᴜᴛᴜʙᴇ - .yehi
   🔰 ᴀɴʏ ɴᴇᴛꜰʟɪx - .nfehi
   🔰 ᴀɴʏ ɪᴍᴏ - .iehi

   🎲 𝙷𝚄𝚃𝙲𝙷 0 - .h0ehi
   🎲 𝙳𝙸𝙰𝙻𝙾𝙶 0 - .d0ehi
   🎲 𝙰𝙸𝚁𝚃𝙴𝙻 0 - .a0ehi
   🎲 𝙼𝙾𝙱𝙸𝚃𝙴𝙻 0 - .m0ehi

   💠 ᎪᏞᏞ ᎬᎻᏆ ҒᏆᏞᎬՏ - .allehi
   

◈ ᴇʜɪ ᴅᴇᴠᴇʟᴏᴘᴇᴅ ʙʏ → 𝐔𝐂𝐇𝐈𝐓𝐇𝐀


🔥 ᏢᎾᎳᎬᏒᎬᎠ bᎽ [🇱🇰𝚱𝚰𝚴Ｇ 𝛃𝚯𝚪🤘] 🔥`

        let buttons = [
             {buttonId: `kingehiuse`, buttonText: {displayText: '🕹️ ️HOW TO USE 🕹️'}, type: 1},
             {buttonId: `eapk`, buttonText: {displayText: '📁 GET INJECTOR APPS 📁'}, type: 1},
             {buttonId: `alive`, buttonText: {displayText: '🎲 BOT STATUS 🎲️'}, type: 1}
                ]
                let buttonMessage = {
                    image: fs.readFileSync('./src/ehilogo.jpg'),
                    caption: BlackQueenehimenu,
                    footer: '</> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋɪɴɢ ʙᴏᴛ </>️ ▷',
                    buttons: buttons,
                    headerType: 4
                }
                BlackQueenmdWH.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            
            
            break
            
            case 'eapk': {         

BlackQueenehiapkmenu = `🔥ᏦᏆΝᏀ ᏴϴͲ ᎬᎻᏆ ᎪᏢᏦ ᏟϴᏞᏞᎬᏟͲᏆϴΝ🔥

🛑 ᴘᴏᴡᴇʀᴇᴅ ʙʏ :::  [🇱🇰𝚱𝚰𝚴Ｇ 𝛃𝚯𝚪🤘]™



🔹 𝙷𝚃𝚃𝙿 𝙸𝙽𝙹𝙴𝙲𝚃𝙾𝚁 - .httpapk
🔹 𝙷𝚃𝚃𝙿 𝙸𝙽𝙹𝙴𝙲𝚃𝙾𝚁 𝙻𝙸𝚃𝙴 - .httplapk
🔹 𝚂𝙾𝙲𝙺𝚂 𝙸𝙽𝙹𝙴𝙲𝚃𝙾𝚁 - .sksapk
🔹 𝚃𝙻𝚂 𝙸𝙽𝙹𝙴𝙲𝚃𝙾𝚁 - .tslapk



🔥 ᏢᎾᎳᎬᏒᎬᎠ bᎽ [🇱🇰𝚱𝚰𝚴Ｇ 𝛃𝚯𝚪🤘] 🔥`



           let buttons = [
               {buttonId: 'kingehiuse', buttonText: {displayText: '🕹️ ️HOW TO USE 🕹️'}, type: 1},
               {buttonId: 'ehi', buttonText: {displayText: '📁 GET EHI 📁'}, type: 1},
               {buttonId: 'alive', buttonText: {displayText: '🎲 BOT STATUS 🎲'}, type: 1}
                     ]
                let buttonMessage = {
                    image: fs.readFileSync('./BlackQueenMedia/logo.jpeg'),
                    caption: BlackQueenehiapkmenu,
                    footer: '</> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋɪɴɢ ʙᴏᴛ </>️ ▷',
                    buttons: buttons,
                    headerType: 4
                }
                BlackQueenmdWH.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                      break
                      
                      case 'kingehiuse': {

reply(`👨‍💻Hᴏᴡ Tᴏ Usᴇ Eʜɪ & Sks Fɪʟᴇs👨‍💻

❤‍🔥  ᴋɪɴɢ ʙᴏᴛ ᴇʜɪ ᴛᴇᴀᴍ

> Free Internet යන්නනම් අනිවාර්යෙන් ඔයාගෙ Sim එකට [ Diaog , Mobitel , Airtel , Hutch ] නැත්තම් Router එකට Pakage එකක් Active කරල තියෙන්න ඕන. 
Ex - ( Dialog zoom *Rs- 165  )

=============================

♦️• What Is EHI Files  > > > > >

> EHI Files කියන්නෙ Http Injector App එකට දාන Config Files වලට.

=============================

♦️• Http Injector 👑️ > > > > > 

> ඔයාල මුලින්ම මේ ඇප් එක install කරගන්න ඕන. ඒකෙ Apk File එක අපගේ බොට්ගෙන් ගන්න පුලුවන් එහෙමත් නැත්තම් අපේ සමූහයන්ගෙන් ගන්න පුලුවන්  ;-)

=============================

♦️• What It Do? 🥳 > > > > > 

> සාමාන්‍යෙන් ඔයාල ZOOM පැකේජ් එකක් දැම්මම 😁 ඔයාලට ගන්න පුලුවන් zoom , ms teams විතරනෙ 😭.

> ඔන්න දැන් EHI File එකක් Connect 🥲 කරල ගත්තම ඔයාට කැමති එකකට කැමති තරම් ඕන වෙලාවක යන්න පුලුවන් 😱

=============================

♦️• How To Connect 🌐 > > > > >

> මුලින්ම අපේ සමූහයන්ට දාන EHI Files වල ඔයාගෙ පැකේජ් එකට හරියන File එක Download කරගන්න ඕන.

> ඊටපස්සෙ ඒ File එක අපි ගත්ත Http Injector App එකෙන් Open කරන්න.

> එතකොට ඒ File එක ඇප් එකෙන් Open වෙයි.

> අන්තිමටම උඩම තියෙන *START* කියන Button එක උඩ Click කරන්න.

> Vpn එක Connect උනාම 😊 ඇති තරම් Internet යන්න 😁.

=============================

⚠Ehi & SKS use කරන්න දන්නැති අය අනිවාරෙයෙන් කියවන්න.

🚀Ehi use කරන්නෙ Http Injector(5.5.0) apk එක bot ගෙන් ඉල්ලගන්න පුලුවන්.

🚀SKS use කරන්නෙ Socks http app එකට ඒක play store එකෙන් දාගන්න පුලුවන්.

🚀ඔයාල ehi file එකක් හරි sks file එකක් හරි තෝරගන්නවනම් ඔයාට තියන package එක අනුව තෝර ගන්න ඕනේ.

උදා - ඔයාට තියෙන්නෙ whatsapp package එකක්නම් all whatsapp ehi file එකක් හරි sks file එකක් හරි තෝරගන්න

🚀බොට්ගෙන් group වල ලින්ක් ඇරන් daily ehi & sks ගන්න.

ᴘᴏᴡᴇʀᴇᴅ ʙʏ : κιиg οƒƒιϲιαℓ τєαм⚡`)
}

           break
           
           case 'shortmenu': {

BlackQueenshortmenu = `
🎭─────「⚙」─────🎭
          ✨ ᴋɪɴɢ ʙᴏᴛ ᴄᴏᴍᴍᴀɴᴅꜱ✨
🎭─────「⚙」─────🎭


┏━━━━━━━━━━━━━📥
┣━🍁 ᴅᴏᴡɴʟᴏᴀᴅ ᴄᴍᴅ 🍁━┫
┣━━━━━━━━━━━━━
┃
┃◈ .ꜱᴏɴɢ {ꜱᴏɴɢ ɴᴀᴍᴇ}
┃◈ .ᴠɪᴅᴇᴏ {ᴠɪᴅᴇᴏ ɴᴀᴍᴇ}
┗━━━━━━━━━━━━━📥

┏━━━━━━━━━━━━━🔍
┣━━🍁 ꜱᴇᴀʀᴄʜ ᴄᴍᴅ 🍁━━┫
┣━━━━━━━━━━━━━
┃
┃◈ .ʏᴛ {ꜱᴇᴀʀᴄʜ ɴᴀᴍᴇ}
┃◈ .ɪᴍɢ {ᴘʜᴏᴛᴏ ɴᴀᴍᴇ}
┗━━━━━━━━━━━━━🔎

┏━━━━━━━━━━━━━‍🪀
┣━━🍁 ɢʀᴏᴜᴘ ᴄᴍᴅ 🍁━━┫
┣━━━━━━━━━━━━━
┃
┃◈ .ᴋɪᴄᴋ {ʀᴇᴘʟʏ}
┃◈ .ᴀᴅᴅ {ɴᴜᴍʙᴇʀ}
┃◈ .ɢʀᴏᴜᴘ {ᴏᴘᴇɴ,ᴄʟᴏꜱᴇ}
┃◈ .ᴘʀᴏᴍᴏᴛᴇ {ʀᴇᴘʟʏ}
┃◈ .ᴅᴇᴍᴏᴛᴇ {ʀᴇᴘʟʏ}
┗━━━━━━━━━━━━━🪀

┏━━━━━━━━━━━━━‍🛠️
┣━━🍁 ᴄᴏɴᴠᴇʀᴛ ᴄᴍᴅ 🍁━┫
┣━━━━━━━━━━━━━
┃
┃◈ .ꜱᴛɪᴄᴋᴇʀ {ʀᴇᴘʟʏ ᴘʜᴏᴛᴏ}
┗━━━━━━━━━━━━━🛠️

┏━━━━━━━━━━━━━‍⛦
┣━━🍁 ᴏᴛʜᴇʀ ᴄᴍᴅ 🍁━━┫
┣━━━━━━━━━━━━━
┃
┃◈ .ᴀʟɪᴠᴇ
┗━━━━━━━━━━━━━⛦`

         let buttons = [
             {buttonId: `command`, buttonText: {displayText: '🍁 BACK TO MENU 🍁'}, type: 1},
             {buttonId: `mainmenu`, buttonText: {displayText: '🎲 MAIN MENU 🎲'}, type: 1},
             {buttonId: `owner`, buttonText: {displayText: '🇱🇰 OWNER 🇱🇰️'}, type: 1}
                         ]
                let buttonMessage = {
                    image: fs.readFileSync('./BlackQueenMedia/logo.jpeg'),
                    caption: BlackQueenshortmenu,
                    footer: '</> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋɪɴɢ ʙᴏᴛ </>️ ▷',
                    buttons: buttons,
                    headerType: 4
                }
                BlackQueenmdWH.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                   break
                    case 'donasi': case 'donate': case 'sewabot': case 'sewa': {
                BlackQueenmdWH.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/c15f725add0381fb69c4b.jpg' }, caption: `*Hi Bro ${m.pushName}*\nDonation section is currently down🥲 , I know you are happy but me 🥲💔\n` }, { quoted: m })
            }
            break
                case 'sc': case 'script': case 'git': case 'github': {
    
BlackQueengitlink=`*🎭 [🇱🇰𝚱𝚰𝚴Ｇ 𝛃𝚯𝚪🤘] created by ШHłТΞ HΛϾКΞЯS 🎭*

*🍁 Contact Owner :: https://wa.me/94729352830?text=HI......%20𝚱𝚰𝚴Ｇ%20𝛃𝚯𝚪%20OWNER࿐*

*🍁 Github link :: https://github.com/KING-BOT-OFFICIAL/KING-BOT-MD*

🍁Checkpoint Group Link ::https://chat.whatsapp.com/KNXP4fcK8ehJsdPlsM97wr

*🍁 My channel link :: https://youtube.com/channel/UCgwWV1Cya4_gUFKYOQYQtHw*


*🔰 For More Updates Subscribe The Channel 🔰*`


let buttons = [
               {buttonId: `shortmenu`, buttonText: {displayText: '🍁 SHORT MENU 🍁'}, type: 1},
               {buttonId: `BlackQueeninfo`, buttonText: {displayText: '〽 ️BOT INFO 〽️'}, type: 1},
               {buttonId: `ping`, buttonText: {displayText: '🎲 SYSTEM STATUS 🎲'}, type: 1}
                ]
                let buttonMessage = {
                    image: fs.readFileSync('./src/bot.jpg'),
                    caption: BlackQueengitlink,
                    footer: '</> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋɪɴɢ ʙᴏᴛ </>️ ▷',
                    buttons: buttons,
                    headerType: 4
                }
                BlackQueenmdWH.sendMessage(m.chat, buttonMessage, { quoted: m })
           }
            break
case 'allmenu': {
  	anu = `
┏━══「 *${botname}* 」━═━⭓ 
┃╔══☯︎「 MAIN 」☯︎
┃╠ ${prefix}alive
┃╠ ${prefix}script
┃╠ ${prefix}speedtest
┃╠ ${prefix}ping
┃╠ ${prefix}owner
┃╠ ${prefix}menu
┃╠ ${prefix}delete
┃╠ ${prefix}chatinfo
┃╠ ${prefix}donate
┃╠ ${prefix}report [bug]
┃╠══✪「 OWNER 」 ☯︎
┃╠ ${prefix}chat [option]
┃╠ ${prefix}join [link]
┃╠ ${prefix}leave
┃╠ ${prefix}block [user]
┃╠ ${prefix}unblock [user]
┃╠ ${prefix}bcgroup [text]
┃╠ ${prefix}bcall [text]
┃╠ ${prefix}setppbot [image]
┃╠ ${prefix}setexif
┃╠══✪「 GROUP 」 ☯︎      
┃╠${prefix}grouplink
┃╠${prefix}ephemeral [option]
┃╠${prefix}setgcpp [image]
┃╠${prefix}setname [text]
┃╠${prefix}setdesc [text]
┃╠${prefix}group [text]
┃╠${prefix}editinfo [option]
┃╠${prefix}add [user]
┃╠${prefix}kick [reply/tag]
┃╠${prefix}hidetag [text]
┃╠${prefix}tagall [text]
┃╠${prefix}antilink [on/off]
┃╠${prefix}mute [on/off]
┃╠${prefix}promote [reply/tag]
┃╠${prefix}demote [reply/tag]
┃╠${prefix}vote
┃╠${prefix}devote
┃╠${prefix}upvote
┃╠${prefix}checkvote
┃╠${prefix}delvote
┃╠═✪「 DOWNLOADER 」☯︎
┃╠${prefix}ytmp3 [url|quality]
┃╠${prefix}ytmp4 [url|quality]
┃╠${prefix}getmusic [yt link]
┃╠${prefix}getvideo [yt link]
┃╠══✪「 SEARCHER 」 ☯︎
┃╠${prefix}play [query]
┃╠${prefix}song [query]
┃╠${prefix}yts [query]
┃╠${prefix}img [query]
┃╠═══✪「 CONVERTER 」 ☯︎
┃╠ ${prefix}toimage [reply stick]
┃╠ ${prefix}sticker [reply img|gif]
┃╠ ${prefix}emojimix [moji+moji]
┃╠ ${prefix}tovideo [reply img]
┃╠ ${prefix}togif [reply stick]
┃╠ ${prefix}tourl [reply img]
┃╠ ${prefix}tovn [reply aud]
┃╠ ${prefix}tomp3 [reply vn]
┃╠ ${prefix}toaudio [reply vid]
┃╠ ${prefix}ebinary [reply txt]
┃╠ ${prefix}dbinary [reply txt]
┃╠ ${prefix}styletext [text]
┃╠═✪「 VOICE CHANGER 」☯︎
┃╠${prefix}bass [reply aud]
┃╠${prefix}blown [reply aud]
┃╠${prefix}deep [reply aud]
┃╠${prefix}earrape [reply aud]
┃╠${prefix}fast [reply aud]
┃╠${prefix}fat [reply aud]
┃╠${prefix}nightcore [reply aud]
┃╠${prefix}reverse [reply aud]
┃╠${prefix}robot [reply aud]
┃╠${prefix}slow [reply aud]
┃╠${prefix}squirrel [reply aud]
┃╚═════ШHłТΞ HΛϾКΞЯS═
┗━「 *Created By ${ownername}* 」━⭓`
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./BlackQueenMedia/logo.jpeg')},
                            hydratedFooterText: `${pushname}`,
                            hydratedButtons: [{
                            urlButton: {
                                    displayText: '🔥 YOUTUBE 🔥',
                                    url: `${myweb}`
                                }
                            }, {
                            	urlButton: {
                                displayText: '👨‍💻 GITHUB 👨‍💻',
                                    url: `${sc}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '⚙️ PROPERTIES ⚙️',
                                    id: `${prefix}alive`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '🇱🇰 OWNER 🇱🇰',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                BlackQueenmdWH.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'mainmenu':
var unicorn = await getBuffer(picak+'Main Menu')
await BlackQueenmdWH.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔═✪「 MAIN 」
┃╠ ${prefix}alive
┃╠ ${prefix}script
┃╠ ${prefix}speedtest
┃╠ ${prefix}ping
┃╠ ${prefix}owner
┃╠ ${prefix}menu
┃╠ ${prefix}delete
┃╠ ${prefix}chatinfo
┃╠ ${prefix}quoted
┃╠ ${prefix}listpc
┃╠ ${prefix}listgc
┃╠ ${prefix}donate
┃╠ ${prefix}report [bug]
┃╚═══════════✪
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "🔥 YOUTUBE 🔥","url": `${myweb}`}},{"urlButton": {"displayText": "👨‍💻 GITHUB 👨‍💻","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "🇱🇰 OWNER 🇱🇰","id": 'owner'}}] )
break

case 'grupmenu': case 'groupmenu':
var unicorn = await getBuffer(picak+'Group Menu')
await BlackQueenmdWH.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔═✪「 GROUP 」	        
┃╠${prefix}grouplink
┃╠${prefix}ephemeral [option]
┃╠${prefix}setgcpp [image]
┃╠${prefix}setname [text]
┃╠${prefix}setdesc [text]
┃╠${prefix}group [text]
┃╠${prefix}editinfo [option]
┃╠${prefix}add [user]
┃╠${prefix}kick [reply/tag]
┃╠${prefix}hidetag [text]
┃╠${prefix}tagall [text]
┃╠${prefix}antilink [on/off]
┃╠${prefix}mute [on/off]
┃╠${prefix}promote [reply/tag]
┃╠${prefix}demote [reply/tag]
┃╠${prefix}vote
┃╠${prefix}devote
┃╠${prefix}upvote
┃╠${prefix}checkvote
┃╠${prefix}delvote
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "🔥 YOUTUBE 🔥","url": `${myweb}`}},{"urlButton": {"displayText": "👨‍💻 GITHUB 👨‍💻","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "🇱🇰 OWNER 🇱🇰","id": 'owner'}}] )
break
case 'ownermenu':
var unicorn = await getBuffer(picak+'Owner Menu')
await BlackQueenmdWH.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔═✪「 OWNER 」	        
┃╠${prefix}grouplink
┃╠${prefix}ephemeral [option]
┃╠${prefix}setgcpp [image]
┃╠${prefix}setname [text]
┃╠${prefix}setdesc [text]
┃╠${prefix}group [text]
┃╠${prefix}editinfo [option]
┃╠${prefix}add [user]
┃╠${prefix}kick [reply/tag]
┃╠${prefix}hidetag [text]
┃╠${prefix}tagall [text]
┃╠${prefix}antilink [on/off]
┃╠${prefix}mute [on/off]
┃╠${prefix}promote [reply/tag]
┃╠${prefix}demote [reply/tag]
┃╠${prefix}vote
┃╠${prefix}devote
┃╠${prefix}upvote
┃╠${prefix}checkvote
┃╠${prefix}delvote
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "🔥 YOUTUBE 🔥","url": `${myweb}`}},{"urlButton": {"displayText": "👨‍💻 GITHUB 👨‍💻","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "🇱🇰 OWNER 🇱🇰","id": 'owner'}}] )
break
case 'downloadmenu':
var unicorn = await getBuffer(picak+'Downloader Menu')
await BlackQueenmdWH.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔═✪「 DOWNLOADER 」	        
┃╠${prefix}ytmp3 [url|quality]
┃╠${prefix}ytmp4 [url|quality]
┃╠${prefix}getmusic [yt link]
┃╠${prefix}getvideo [yt link]
┃╠${prefix}umma [query]
┃╠${prefix}joox [query]
┃╠${prefix}soundcloud [url]
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "🔥 YOUTUBE 🔥","url": `${myweb}`}},{"urlButton": {"displayText": "👨‍💻 GITHUB 👨‍💻","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "🇱🇰 OWNER 🇱🇰","id": 'owner'}}] )
break
case 'searchmenu':
var unicorn = await getBuffer(picak+'Search Menu')
await BlackQueenmdWH.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔══✪「 SEARCHER 」	        
┃╠${prefix}play [query]
┃╠${prefix}song [query]
┃╠${prefix}yts [query]
┃╠${prefix}google [query]
┃╠${prefix}gimage [query]
┃╠${prefix}pinterest [query]
┃╠${prefix}wallpaper [query]
┃╠${prefix}wikimedia [query]
┃╠${prefix}ytsearch [query]
┃╠${prefix}ringtone [query]
┃╠${prefix}webtoon [query]
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "🔥 YOUTUBE 🔥","url": `${myweb}`}},{"urlButton": {"displayText": "👨‍💻 GITHUB 👨‍💻","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "🇱🇰 OWNER 🇱🇰","id": 'owner'}}] )
break
case 'randommenu':
var unicorn = await getBuffer(picak+'Random Menu')
await BlackQueenmdWH.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔══✪「 RANDOM 」	        
┃╠${prefix}coffee
┃╠${prefix}animequote (indo)
┃╠${prefix}couplepp
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "🔥 YOUTUBE 🔥","url": `${myweb}`}},{"urlButton": {"displayText": "👨‍💻 GITHUB 👨‍💻","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "🇱🇰 OWNER 🇱🇰","id": 'owner'}}] )
break
case 'textpromenu':
var unicorn = await getBuffer(picak+'Text Pro Menu')
await BlackQueenmdWH.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔═✪「 TEXT PRO 」	        
┃╠ ${prefix}3dchristmas [txt]
┃╠ ${prefix}3ddeepsea [txt]
┃╠ ${prefix}americanflag [txt]
┃╠ ${prefix}3dscifi [txt]
┃╠ ${prefix}3drainbow [txt]
┃╠ ${prefix}3dwaterpipe [txt]
┃╠ ${prefix}halloweenskeleton [txt]
┃╠ ${prefix}sketch [txt]
┃╠ ${prefix}bluecircuit [txt]
┃╠ ${prefix}space [txt]
┃╠ ${prefix}metallic [txt]
┃╠ ${prefix}fiction [txt]
┃╠ ${prefix}greenhorror [txt]
┃╠ ${prefix}transformer [txt]
┃╠ ${prefix}berry [txt]
┃╠ ${prefix}thunder [txt]
┃╠ ${prefix}magma [txt]
┃╠ ${prefix}3dcrackedstone [txt]
┃╠ ${prefix}3dneonlight [txt]
┃╠ ${prefix}impressiveglitch [txt]
┃╠ ${prefix}naturalleaves [txt]
┃╠ ${prefix}fireworksparkle [txt]
┃╠ ${prefix}matrix [txt]
┃╠ ${prefix}dropwater [txt]
┃╠ ${prefix}harrypotter [txt]
┃╠ ${prefix}foggywindow [txt]
┃╠ ${prefix}neondevils [txt]
┃╠ ${prefix}christmasholiday [txt]
┃╠ ${prefix}3dgradient [txt]
┃╠ ${prefix}blackpink [txt]
┃╠ ${prefix}gluetext [txt]
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "🔥 YOUTUBE 🔥","url": `${myweb}`}},{"urlButton": {"displayText": "👨‍💻 GITHUB 👨‍💻","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "🇱🇰 OWNER 🇱🇰","id": 'owner'}}] )
break
case 'convertmenu':
var unicorn = await getBuffer(picak+'Converter Menu')
await BlackQueenmdWH.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔══✪「 CONVERTER 」	        
┃╠ ${prefix}toimage [reply stick]
┃╠ ${prefix}sticker [reply img|gif]
┃╠ ${prefix}emojimix [moji+moji]
┃╠ ${prefix}tovideo [reply img]
┃╠ ${prefix}togif [reply stick]
┃╠ ${prefix}tourl [reply media]
┃╠ ${prefix}tovn [reply aud]
┃╠ ${prefix}tomp3 [reply vn]
┃╠ ${prefix}toaudio [reply vid]
┃╠ ${prefix}ebinary [reply txt]
┃╠ ${prefix}dbinary [reply txt]
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "🔥 YOUTUBE 🔥","url": `${myweb}`}},{"urlButton": {"displayText": "👨‍💻 GITHUB 👨‍💻","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "🇱🇰 OWNER 🇱🇰","id": 'owner'}}] )
break
case 'voicechangermenu':
var unicorn = await getBuffer(picak+'Voice Changer Menu')
await BlackQueenmdWH.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔══✪「 VOICE CHANGER 」	        
┃╠${prefix}bass [reply aud]
┃╠${prefix}blown [reply aud]
┃╠${prefix}deep [reply aud]
┃╠${prefix}earrape [reply aud]
┃╠${prefix}fast [reply aud]
┃╠${prefix}fat [reply aud]
┃╠${prefix}nightcore [reply aud]
┃╠${prefix}reverse [reply aud]
┃╠${prefix}robot [reply aud]
┃╠${prefix}slow [reply aud]
┃╠${prefix}squirrel [reply aud]
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "🔥 YOUTUBE 🔥","url": `${myweb}`}},{"urlButton": {"displayText": "👨‍💻 GITHUB 👨‍💻","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "🇱🇰 OWNER 🇱🇰","id": 'owner'}}] )
break
case 'thanksto': case 'tqto': case 'tqtt':
var unicorn = await getBuffer(picak+'Developer')
await BlackQueenmdWH.send5ButImg(from, `` + '' + ' ', `
🎭𝙸 𝙰𝙼 𝙺𝙸𝙽𝙶 𝙱𝙾𝚃 𝙼𝙳 𝚅𝙴𝚁𝚂𝙸𝙾𝙽🎭

තව ගැහුවෙ නෑ.
`,unicorn, [{"urlButton": {"displayText": "🔥 YOUTUBE 🔥","url": `${myweb}`}},{"urlButton": {"displayText": "👨‍💻 GITHUB 👨‍💻","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "🇱🇰 OWNER 🇱🇰","id": 'owner'}}] )
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    BlackQueenmdWH.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
