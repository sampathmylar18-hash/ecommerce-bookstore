require('dotenv').config()
const express = require('express');
const path = require('path');
const connect = require("./database/database")
const bookroutes = require('./routes/book-routes')
const orderroutes = require('./routes/order-routes')
const authroutes = require('./routes/auth-routes')
const cors = require('cors')
//const bookroutes = require("./routes/book-routes") 

//env
const port = process.env.PORT;
const mongo = process.env.MONGO_URI

//connection call
connect()

const app = express()
app.use(cors())
app.use(express.json())

// Serve frontend files
app.use(express.static(path.join(__dirname, '../frontend')))

app.use('/api/books',bookroutes)
app.use('/api/orders',orderroutes)
app.use('/api/auth', authroutes)


// Catch-all so index.html loads on the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'))
})

app.listen(port,()=>{
    console.log(`server is now running on port ${port}`)
})
