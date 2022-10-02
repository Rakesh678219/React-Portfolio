const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')
const app = express()

//Middlewares
app.use(cors())
app.use(bodyParser.json())

app.set('view engine', 'ejs')

//routes
app.get('/', (req, res) => {
  res.render('index', { text: 'World!' })
})

//import routes for projects

const projectsRouter = require('./routes/projects')

app.use('/projects', projectsRouter)

//import routes for posts
const postsRouter = require('./routes/posts')

app.use('/posts', postsRouter)

//import routes for messages

const messagesRouter = require('./routes/messages')

app.use('/messages', messagesRouter)

//connect to db
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log('Connected to MongoDB')
})

app.listen(9000)
