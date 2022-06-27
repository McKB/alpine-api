const express = require('express')
const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(express.json())

const resortsRouter = require('./routes/resorts.routes')
const chairliftsRouter = require('./routes/chairlifts.routes')
const statsRouter = require('./routes/stats.routes')
const indexRouter = require('./routes/index.routes')

app.use('/api/resorts', resortsRouter)
app.use('/api/chairlifts', chairliftsRouter)
app.use('/api/stats', statsRouter)
app.use('/api', indexRouter)

app.listen(1337, () => {
  console.log('listening at http://localhost:1337....') // eslint-disable-line no-console
})
