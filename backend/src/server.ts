import express from 'express';

import './database/connection';

const app = express();

app.use(express.json());

app.get('/users', ()=>{
    console.log("heelo ")
})

app.listen(3333)