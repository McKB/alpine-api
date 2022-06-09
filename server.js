const express = require('express')
const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => {
  return response.render('index')
})

app.listen(1337, () => {
  console.log('listening at http://localhost:1337....') // eslint-disable-line no-console
})
