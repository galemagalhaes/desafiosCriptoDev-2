const express = require('express')
const convertRgb = require('../components/rgbToHex')
const convertHex = require('../components/hexToRgb')

const port = 8080;
const app = express()

app.get('/rgbToHex', (req, res) => { 
    res.send(convertRgb.rgbToHex(req.query.rgb ))
})

app.get('/hexToRgb', (req, res) => {
    res.send(convertHex.hexToRgb(req.query.hex))
})

app.listen(port, () => {
console.log(`Servidor rodando na porta ${port}`)
})