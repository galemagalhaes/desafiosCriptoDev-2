const express = require('express')

const port = 8080;

const app = express()

app.get('/rgbToHex', (req, res) => {
    res.send('Endpoint para converter rgb para hexadecimal')
})

app.get('/hexToRgb', (req, res) => {
    res.send('Endpoint para converter hexadecimal para rgb')
})


app.listen(port, () => {
console.log(`Servidor rodando na porta ${port}`)
})