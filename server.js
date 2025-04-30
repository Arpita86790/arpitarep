const express = require('express')
const jwt = require('jsonwebtoken')
const config = require('./config')
const utils = require('./utils')
const cors = require('cors')


const app = express()

app.use(cors())
app.use(express.json())


app.use((request, response, next) => {
  if (
    request.url == '/user/register' ||
    request.url == '/user/login' ||
    request.url == '/user/verify'
  ) {
    
    next()
  } else {
    
    const token = request.headers['token']

    
    if (!token) {
      response.send(utils.createError('missing token'))
    } else {
      try {
        
        const payload = jwt.verify(token, config.secrete)

        
        request.user = payload

       
        next()
      } catch (ex) {
        response.send(utils.createError('invalid token'))
      }
    }
  }
})


const userRouter = require('./routes/user')
const todoRouter = require('./routes/todo')

app.use('/user', userRouter)
app.use('/todo', todoRouter)


app.listen(4000, '0.0.0.0', () => {
  console.log(`server started on port 4000`)
})
