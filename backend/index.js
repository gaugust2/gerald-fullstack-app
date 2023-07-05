const app = require('./app')
const config = require('./utils/config')
const {info, error} = require('./utils/logger')

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    info(`Server running on port ${PORT}`)
})