const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="accra,ghana."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://DARKSHAN:3000@cluster0.t1wsjlv.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "africa/ghana";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/CaOufuEoNtM6asSVp0nGat";
global.website=process.env.GURL || "https://chat.whatsapp.com/BqIRyvHLc4cE0un29nq0U0" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "233256393706" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,233597342489";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233597342489";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_22_40_02_16_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiU0dsL0JscnlqeFl5NW5GRFNTaUdJVDdhQno2M1FPcDVoQklMeWdIdzhuUT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkx5eHBDV0ZYeWtWUFNRbGlmQkxEN0hMMTVmRGpjbkhZQ1FGbUp4dk55Mm89XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwicUJvckhibXI3VUxJbnY3VldVNFhmUWQ1OFlldHBveG9RbVN0T3hxTm8wUT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjdSY2hEWi9wTkVVKy9OQS84THJZNkVkYjJSdWxRQU1kMkoyaVBFVzQ0MXc9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiOEN2dDMyOGRuTWp2enI3QnM4M0w4MnFPWnZPeUZ0Z2lpenVjN2lMWmkxRT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkM4cGVWS1FhYURhSVBjNXpQdDRjaGN1eGR4Nm03aVdEZkJNcGpBQVlzM289XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJRTmx1TXlNWGs3MTNjV01yTGhQVWU2QzFIRDA0N3ZHemhqY3dUeVRoN1ZrPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiZ0RPQVc0aVpEbXhLMTBDUm51ZmsyTUNwUGhyNVBWTFFVNEFtU2c2QTMyYz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJoTGsrRzdnYXBncDl2SXZydDJPOU54ZzVia3J1UDJPQ0YzbmJ1VmZlaGlXZ2VsMkpBYmIxOUUyWkdSMXNPZ2UyTm9LUzREZkRkMXNhRk8waGtaQm5BZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6OTEsXCJhZHZTZWNyZXRLZXlcIjpcIlZmd0ZmMGozcCtDSFhKRSs5cks0TjRrUEh3emRxajd4RitsVkVqWTFyRDQ9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbXSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjAsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJuOFp5OE1lWlNydTJCUjNwTklWVG1RXCIsXCJwaG9uZUlkXCI6XCJiMTFlNDU0MC1mM2FhLTRlYmItYmY3My05M2Q1MDBiZjkzZjVcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkFXZUtlSU9Gazl0MFhzaWFXRGZ3QUUzdk85az1cIn0sXCJyZWdpc3RlcmVkXCI6ZmFsc2UsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiZzdMTXdKVmh0RDV3Z21ZbTI4eEZjait1RVIwPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNKKzI3NHNGRUxYSXY2NEdHQUVnQUNnQVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiMkYydjEzVU9WMUU5aWlBeGUrMUdlZmZnWEF3WnpFYkdMSUc3ekIzKzh5Yz1cIixcImFjY291bnRTaWduYXR1cmVcIjpcIjVYdzg1TkcwdHN0WnBodW5IU2tlMHRKQVEwMU4zdWhmTktOdGthZ2pJdHlvbCs4Y25BOFJvM2xtZFIyc3lpbzVEWVIwMjBFYkJqMlY0cHFVc3VwbURBPT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwiaUZUWEdnc3B5cnZxM200aDdaOGMzVzNYa3VoWXFmSEI3ajluTmpQR2hvcm8vTGpNRTJMVDBNSFhtZ1E4dTBXSnJoSnZvVGF2WWdWUWUrdUJHUGpGQmc9PVwifSxcIm1lXCI6e1wiaWRcIjpcIjIzMzU5NzM0MjQ4OToyQHMud2hhdHNhcHAubmV0XCIsXCJuYW1lXCI6XCJMaXZpbmdzdG9uIEdyYXBoaXhsXCIsXCJsaWRcIjpcIjI4MDcwMjE1MTA4NjA5NjoyQGxpZFwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjIzMzU5NzM0MjQ4OToyQHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQmRoZHI5ZDFEbGRSUFlvZ01YdnRSbm4zNEZ3TUdjeEd4aXlCdTh3ZC92TW5cIn19XSxcInBsYXRmb3JtXCI6XCJzbWJhXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzA4MTIzMTkzLFwibXlBcHBTdGF0ZUtleUlkXCI6XCJBQUFBQU1aMVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1aMS5qc29uIjogIntcImtleURhdGFcIjpcIlRRUVV6WlpNUU9tK0syN0lYd0RpYmpDZnExV2R6L2E0MCsxaXNhM0Y0N0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM2NzA3MTUxOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzA4MTIzMTk5MzU3XCJ9Igp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
