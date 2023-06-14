const mongoose = require('mongoose')

mongoose.connect(process.env.URI)
        .then(() => {
            console.log("Db connected")
        })
        .catch((err) =>{
            console.log(err)
        })