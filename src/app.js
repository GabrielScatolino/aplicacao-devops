const express = require('express')
const app =  express()
const port = 3000;




app.get('/', (req, res) => {
    res.sendFile('views/index.html', {root: __dirname})
})

data = {'integrantes': [
    {'nome': 'Gabriel de Rezende Silva Scatolino'},
    {'nome': 'Francisco Chaves Paschoeto'},
    {'nome': 'João Henrique Ribeiro Trindade'}
]}

app.get('/integrantes', (req, res) => {

res.json(data)
})





app.listen(port, () => {
console.log('Example app listening on port: ' + port)
})