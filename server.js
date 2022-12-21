const express = require('express')

const app = express()

const auth = 'Bearer 1234'

app.get('/', (req, res) => {
  res.send('Hello Handsome!')
})

app.get('/user', (req, res) => {
    console.log('req.headers.authorization', req.headers.authorization)
    if (req.headers.authorization === auth) {
        res.send({
            name: 'Hendra Kusuma',
            job : 'Programer',
            age : 33,
            favorite_food : 'Nasi Goreng'
         })
    }   else {
        res.status(401).send('Unauthorized')
    } 

})

app.listen(8000, () => {
    console.log('Example app listening on port 8000!')
})
