let handler = async (m, { conn, usedPrefix, command }) => {
  await m.reply(`*_ᴛᴜɴɢɢᴜ sᴇʙᴇɴᴛᴀʀ_*`)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
  conn.sendButton(m.chat, `Nih *${name}*`, botdate, pickRandom(hnt_gifs), [['Next', `/hnt_gifs`]],m)
}
handler.help = ['hnt_gifs']
handler.tags = ['nsfw','premium']
handler.command = /^(hnt_gifs)$/i

handler.premium = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const hnt_gifs = [

 "https://media.discordapp.net/attachments/531827568966631425/637014480550756373/image0.gif",
    "https://media.discordapp.net/attachments/531827568966631425/616189280141967360/lusciousnet_lusciousnet_bondage-girls-in-shackles_pervifycom_2034258317.gif",
    "https://media.discordapp.net/attachments/531827568966631425/581689350186860556/MMfgQRb.gif",
    "https://media.discordapp.net/attachments/531827568966631425/581689349398069269/Stuff_celestine-lucullus-x-kuroinu-kedakaki-seijo-wa-hakudaku-ni-somaru.gif",
    "https://media.discordapp.net/attachments/531827568966631425/581689348421058562/Celestine_Lucullus_1.gif",
    "https://media.discordapp.net/attachments/531827568966631425/548738271677644810/Random_hentai_gifNB_0149.gif",
    "https://media.discordapp.net/attachments/531827568966631425/540141232861478922/3079f0822bbb2c9e081cff22f3758363.gif",
    "https://media.discordapp.net/attachments/531827568966631425/539913500722724864/cf2646eee9d96c3a1ae8d46bd064da82.png",
    "https://media.discordapp.net/attachments/527959391446761473/570389741057474574/96239a44f0f892d8157534ad7e6600bf.gif",
    "https://media.discordapp.net/attachments/527959391446761473/569504025247088672/7660786.gif",
    "https://img2.gelbooru.com/images/58/84/5884712c96853976f412f41ce0f12bb8.gif",
    "https://cdn.discordapp.com/attachments/770948564947304448/770966727809957888/kiryuuin_satsuki_and_matoi_ryuuko_kill_la_kill_drawn_by_bard_bot__489699ca07075ac0c56963fc3e28990d.gif",
    "https://cdn.discordapp.com/attachments/770948564947304448/770967592713060392/71ada0ef-dc37-4367-8253-1454dab2fa4a.gif",
    "https://cdn.discordapp.com/attachments/770948564947304448/770967946528161822/18165929.gif",
    "https://cdn.discordapp.com/attachments/770948564947304448/770968720154951680/animeblog.ru___155.gif",
    "https://cdn.discordapp.com/attachments/770948564947304448/770969248158711848/f292a76d28577acf284a8c834b008105.gif",
    "https://cdn.discordapp.com/attachments/770948564947304448/771015267542237184/672ca21e0596157bbbbb0f69a3614750.gif",
    "https://cdn.discordapp.com/attachments/770948564947304448/771024612367532082/37dab8ee-32fb-4430-b546-e78cef14ba41.gif",
    "https://cdn.discordapp.com/attachments/707201738255368194/771796761131352064/WhichAbleCoyote-mobile.gif",
    "https://cdn.discordapp.com/attachments/707201738255368194/771796813165494292/TestyIgnorantGalapagosmockingbird-mobile.gif",
    "https://cdn.discordapp.com/attachments/707201738255368194/771800866159722499/RevolvingForcefulAddax-mobile.gif",
    "https://cdn.discordapp.com/attachments/707201738255368194/771800877047873556/ReasonableLegitimateBuzzard-mobile.gif",
    "https://cdn.discordapp.com/attachments/707201738255368194/771800894765006859/ImmaculateFlawlessBlesbok-mobile.gif",
    "https://cdn.discordapp.com/attachments/707201738255368194/771800904756101180/IdleLittleArieltoucan-mobile.gif",
    "https://cdn.discordapp.com/attachments/707201738255368194/771800911446147072/HomelyAntiqueEmperorpenguin-mobile.gif",
    "https://cdn.discordapp.com/attachments/707201738255368194/771800923998781440/FirmFlawedCentipede-mobile.gif",
    "https://cdn.discordapp.com/attachments/707201738255368194/771800934144933958/DelayedSlowDamselfly-mobile.gif",
    "https://cdn.discordapp.com/attachments/707201738255368194/771800955855044668/CoordinatedSlipperyAcornwoodpecker-mobile.gif"
]