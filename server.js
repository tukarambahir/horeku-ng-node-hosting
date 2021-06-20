const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const config = require('./config')
const cors = require('cors')
const path = require('path')

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


// // default route
// app.get('/', (request, response) => {
//   response.send('welcome to my application')
// })


// add the routes
app.use('/user', userRouter)
app.use('/order', orderRouter)
app.use('/product', productRouter)
app.use('/cart', cartRouter)
app.use('/category', categoryRouter)


// Serve only the static files form the dist directory
app.use(express.static('./dist/medical-site-for-delivery'));

// app.get('/*', (req, res) =>
//     res.sendFile('index.html', {root: 'dist/angular-app-heroku/'}),
// );
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);

