const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const path = require('path')
    //configuring dot env to use varial just process.env.name of 
dotenv.config();


//import Routes
const authRoute = require('./routes/auth')

//connect to Db
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((con) => {
    console.log("connected to db")
}).catch(err => console.log(err))

//enabling cors
app.use(cors())

app.use(express.static(path.join(__dirname, 'public')));
//middleware parsing body
app.use(express.json())

//route Middlewares
app.use('/api/user', authRoute)
app.use('/api/post', require('./routes/post'))
app.listen(2000, () => console.log("running on Port 2000"))