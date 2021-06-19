const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const config = require('./config')
const cors = require('cors')

// morgan: for logging
const morgan = require('morgan')

// swagger: for api documentation
//const swaggerJSDoc = require('swagger-jsdoc')
//const swaggerUi = require('swagger-ui-express')

// routers
const userRouter = require('./user/routes/user')
const orderRouter = require('./user/routes/order')
const productRouter = require('./user/routes/product')
const cartRouter = require('./user/routes/cart')
const categoryRouter = require('./user/routes/category')

const app = express()
app.use(cors('*'))
app.use(bodyParser.json())
app.use(morgan('combined'))




// // add a middleware for getting the id from token
// function getUserId(request, response, next) {

//   if ( request.url == '/'
//       ||   request.url == '/user/signin' 
//       || request.url == '/user/signup'
//       || request.url == '/user/getDetails'
//       || request.url.startsWith('/user/activate')
//       || request.url == '/logo.png'
//       || request.url.startsWith('/product/image/')
//       || request.url.startsWith('/user/forgot-password')) {
//     // do not check for token 
//     next()
//   } else {

//     try {
//       const token = request.headers['token']
//       const data = jwt.verify(token, config.secret)

//       // add a new key named userId with logged in user's id
//       request.userId = data['id']

//       // go to the actual route
//       next()
      
//     } catch (ex) {
//       response.status(401)
//       response.send({status: 'error', error: 'protected api'})
//     }
//   }
// }

// app.use(getUserId)

// required to send the static files in the directory named images
app.use(express.static('images/'))

// add the routes
app.use('/user', userRouter)
app.use('/order', orderRouter)
app.use('/product', productRouter)
app.use('/cart', cartRouter)
app.use('/category', categoryRouter)

// default route
app.get('/', (request, response) => {
  response.send('welcome to my application')
})


// app.use(express.static('./dist/user-portal'));

// app.get('/*', (req, res) =>
//     res.sendFile('index.html', {root: 'dist/user-portal/'}),
// );
app.listen(process.env.PORT || 8080, '0.0.0.0', () => {
  console.log('server started on port 4000')
})