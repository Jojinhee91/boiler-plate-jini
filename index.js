const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jini:1111@boilerplate.vxi900d.mongodb.net/?retryWrites=true&w=majority',
    {useNewUrlPaeser: true, useInifiedTopology: true, useCreateIndex:true, useFindAndModify:false
})
.then(()=> console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/', (req,res) => res.send('Hello World!'))
app.listen(port, () => consclole.log('Example app listening on port ${port}!'))

