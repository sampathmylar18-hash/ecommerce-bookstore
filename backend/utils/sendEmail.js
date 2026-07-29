async function sendEmail(to, subject, text) {
    try {
        console.log(`--- EMAIL (dev mode, not actually sent) ---`)
        console.log(`To: ${to}`)
        console.log(`Subject: ${subject}`)
        console.log(`Message: ${text}`)
        console.log(`---------------------------------------------`)
    } catch (e) {
        console.error(e)
    }
}

module.exports = sendEmail