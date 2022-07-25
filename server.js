const express = require('express');
const app  = express();
const PORT = 8000;

const rappers = {
    '21 savage':{
    'age':29,
    'birthName':'raul',
    'birthLocation':'London, England'
    },
    'chance the rapper': {
        'age': 29,
        'birthName': 'raul',
        'birthLocation': 'Chicago'
    },
    'dylan': {
        'age': 30,
        'birthName': 'dylan',
        'birthLocation': 'Detroit'
    },
    'dylan dylan': {
        'age': 15,
        'birthName': 'dylan dylan',
        'birthLocation': 'dylan'
    }

}


app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request,response)=>{
    const rappersName = request.params.rapperName.toLowerCase()
    // response.json(rappers)
    if(rappers[rappersName]){
        response.json(rappers[rappersName])
    }else{
        response.json(rappers['dylan dylan'])
    }
})

app.listen(PORT, ()=>{
    console.log(`the server is running on ${PORT} you better go catch it`)
})