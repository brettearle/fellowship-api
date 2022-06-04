const express = require('express')
const app = express()

const PORT = 8000

//in file db
const fellowship = {
    'frodo': {
        'firstName': 'Frodo',
        'lastName': 'Baggins',
        'from': 'The Shire'
    },
    'sam': {
        'firstName': 'Samwise',
        'lastName': 'Gamgee',
        'from': 'The Shire'
    },
}
const notInTheFellowship = {
    'unknownMember':{
        'firstName': 'Unknown',
        'lastName': 'Unknown',
        'from': 'Unknown'
    }
}

//routes
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req,res)=>{
    res.json(fellowship)
})

app.get('/api/:character', (req, res)=>{
    const character = req.params.character.toLowerCase()
    if(fellowship[character]){
        res.json(fellowship[character])
    } else {
        res.json(notInTheFellowship)
    }
})


//listen
app.listen(PORT, ()=>{
    console.log(`running on ${PORT}`)
})