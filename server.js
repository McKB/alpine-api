const express = require('express')
const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

// const resortsRouter = require('./routes/resorts')
// const chairliftsRouter = require('./routes/chairlifts')
// const statsRouter = require('./routes/stats')
const indexRouter = require('./routes/index.routes')

// app.use('/resorts', resortsRouter)
// app.use('/chairlifts', chairliftsRouter)
// app.use('/stats', statsRouter)
app.use('/', indexRouter)

app.listen(1337, () => {
  console.log('listening at http://localhost:1337....') // eslint-disable-line no-console
})
