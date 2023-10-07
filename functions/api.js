import  express  from "express";
import Serverless from "serverless-http";
import path from "path"

const app = express ();
let dirname = path.relative()
app.get('/', (req,res) =>{
    res.send('Hush kelipsz')
})

app.get('/all', (req,res) =>{
    res.json({
        name:"Rahmatxo'ja",
        hobby: {
            1:"mexanik",
            2:"programming",
            3:"music"
        }
    })
})

app.get('/ab', (req,res) =>{
    res.sendFile(path.join(dirname,'/dist/index.html'))
})

export const handler = Serverless(app);