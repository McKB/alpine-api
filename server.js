const express = require('express')
const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.listen(1337, () => {
  console.log('listening at http://localhost:1337....') // eslint-disable-line no-console
})
