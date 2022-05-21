const http = require('http')
const express = require('express')

const port = 8080
const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "application/json" })
    response.end(rgbToHex, rgbToHex)
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})