const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 1337

app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(express.static('client/build'))
app.use(express.json())
app.use(cors())

const resortsRouter = require('./routes/resorts.routes')
const chairliftsRouter = require('./routes/chairlifts.routes')
const statsRouter = require('./routes/stats.routes')
const indexRouter = require('./routes/index.routes')

app.use('/api/resorts', resortsRouter)
app.use('/api/chairlifts', chairliftsRouter)
app.use('/api/stats', statsRouter)
app.use('/api', indexRouter)

app.all('*', (req, res) => { res.sendFile(path.resolve(__dirname, 'client/build', 'index.html')) })

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}....`) // eslint-disable-line no-console
})
