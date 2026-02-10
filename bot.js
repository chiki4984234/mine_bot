const mineflayer = require('mineflayer')

function createBot() {
    const bot = mineflayer.createBot({
        host: '88.198.2.26:33571', 
        port: 33571,
        username: 'Chiki_admin', 
        version: '1.21'
    })

    bot.on('spawn', () => {
        console.log('Bot joined! Logging in...')
        bot.chat('/login Adminchiki') 
    })

    bot.on('end', () => {
        setTimeout(createBot, 5000)
    })

    bot.on('error', err => console.log(err))
}

createBot()