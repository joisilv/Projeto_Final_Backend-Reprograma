const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const roteiros = require('./routes/roteiros')
const PORT = 3000

app.use(cors())
app.use(bodyParser.json())
app.use('/roteiros', roteiros)

app.get('/', (request, response) => {
  response.send('Olá, Viajante!')
})

app.listen(PORT)
console.info(`Rodando na porta ${PORT}`)
