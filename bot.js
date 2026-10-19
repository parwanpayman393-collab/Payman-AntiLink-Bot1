const { Client, LocalAuth } = require('whatsapp-web.js')
const qrcode = require('qrcode-terminal')

const client = new Client({
authStrategy: new LocalAuth()
})

client.on('qr', (qr) => {
console.log('اسکن کن:', qr)
qrcode.generate(qr, { small: true })
})

client.on('ready', () => {
console.log('Payman AntiLink Bot is ready!')
})

client.on('message', async (msg) => {
const chat = await msg.getChat()

if (!chat.isGroup) return

const link = /(https?://|www.|chat.whatsapp.com/)/i

if (link.test(msg.body)) {
await msg.delete(true)
await msg.reply('ارسال لینک در این گروه ممنوع است 🚫')
}
})

client.initialize()