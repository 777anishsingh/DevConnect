const express = require('express')
const app = express()

const { userAuth, adminAuth } = require('../middleware/Auth')


app.use('/Admin', adminAuth)
app.get('/Admin/getUsers', (req, res) => {
    res.send('User data sent')
})
app.get('/Admin/deleteUsers', (req, res) => {
    res.send('User deleted')
})


app.post('/user/login', (req, res) => {
    res.send('Login Request')
})

app.get('/user/data', userAuth, (req, res) => {
    res.send('User Panel')
})

app.listen(3000, () => {
    console.log("Hello listners");
})

