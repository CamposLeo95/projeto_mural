const PORT = process.env.PORT || 3001;
const express = require('express')
const apiRoute = require('./routes/api')
const path = require('path')
const cors = require('cors')

const app = express()

app.use('/', express.static(path.join(__dirname, "public")))
app.use('/api', apiRoute)


app.listen(PORT, ()=>{
    console.log("Server running on port ", PORT);
})
