require('dotenv').config()
const bodyParser = require('body-parser')
const express   = require ('express')
const dbConnect   = require ('./models')
const workoutRoutes = require('./routes/workout')

const app = express()


app.use((req,res,next) =>{
    console.log(req.path, req.method)
    next()
})

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
//routes
app.use('/api/workouts', workoutRoutes)




app.listen(process.env.PORT, () => {
    console.log( `Workout app is listening on port,${process.env.PORT}` )
})