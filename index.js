const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send('Hola mundo con express')
});

app.listen(3001, ()=>{
    console.log('Servidor en 3000')
});