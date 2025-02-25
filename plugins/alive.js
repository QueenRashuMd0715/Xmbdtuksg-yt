const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["status", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "👋",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `*👋 𝐇ʏᴇ ${pushname} 𝐈 𝐀ᴍ 𝐎ɴʟɪɴᴇ 𝐍ᴏᴡ 🫟*

*-          𓆩⳻᷼⳺ 🫟𝐑𝐀𝐒𝐇𝐔 𝐌𝐃‼️ ⳻᷼⳺𓆪*         ـ

╭•╼━═━━≺• 𝔸𝕃𝕀𝕍𝔼 •≻━━═━╾•╮
> *𖤩  {🔥} 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 :* _${runtime(process.uptime())}_
> *𖤩  {🦠} 𝐑𝐀𝐌 𝐔𝐒𝐀𝐆𝐄 :* _${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB_
> *𖤩  {🗡} 𝐇𝐎𝐒𝐓 𝐍𝐀𝐌𝐄 :* _${os.hostname()}_
> *𖤩  {✨} 𝐎𝐖𝐍𝐄𝐑 :* _Nipun Harshana_
╰•╼━═━━≺𝕋ℍ𝔸ℕ𝐊𝕊≻━━═━╾•╯

> *𝙿𝙾𝚆𝙴𝙰𝚁𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 𝚁𝙰𝚂𝙷𝚄 𝙼𝙳 🫟*`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://i.ibb.co/gZv1pgXN/6563.jpg` },  // Image URL
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363357105376275@g.us@newsletter',
                    newsletterName: '👾 𝐐𝚵𝚵𝐍 𝐑𝐀𝐒𝐇𝐔 𝐌𝐃‼️',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
