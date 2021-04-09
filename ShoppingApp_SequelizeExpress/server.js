const express = require('express')

const path = require('path')

const app = express()

app.use(express.json()) //To get the post request correctly
app.use(express.urlencoded({extended:true})) //To get the post request correctly

app.use('/' , express.static(path.join(__dirname,'public')))
app.use('/api' , require('./routes/api').route)

app.listen(2678 , () => console.log('server started at http://localhost:2678'))