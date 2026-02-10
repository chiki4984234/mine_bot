const mineflayer = require('mineflayer')

function createBot() {
    const bot = mineflayer.createBot({
        host: '88.198.2.26', // මෙතැනට අංක ටික විතරක් දෙන්න
        port: 33571,         // මෙතැනට තිත් දෙක නැතුව port එක විතරක් දෙන්න
        username: 'Chiki_admin',
        version: '1.21.4'
    })

    bot.on('spawn', () => {
        console.log('Bot joined the server!')
        // සර්වර් එකට ආපු ගමන් Register හෝ Login වෙන්න
        bot.chat('/register Chiki123 Chiki123') 
        bot.chat('/login Chiki123')
    })

    // සර්වර් එකෙන් Kick වුණොත් තත්පර 5කින් ආයෙත් Join වෙන්න
    bot.on('end', () => {
        console.log('Disconnected. Reconnecting...')
        setTimeout(createBot, 5000)
    })

    bot.on('error', err => console.log('Error:', err))
}

createBot()


