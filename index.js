const express = require('express')
const bodyParser = require('body-parser')
const db = require('./config/Database')
const app = express()
app.use(bodyParser.json())

const port = 5000
const {
    home,
    getMhs,
    addMhs
} = require('./controller/MhsController')

app.get('/', (req, res) => home(res, port))
app.get('/mahasiswa', (req, res) => getMhs(db, res))
app.post('/mahasiswa', (req, res) => addMhs(db, req, res))

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/mahasiswa`);
})