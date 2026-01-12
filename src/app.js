require('dotenv').config()
const connectDB = require("./config/database")
const express = require('express')
const app = express()
const User = require('./model/user')


app.post('/signup', async (req, res) => {
    const user = new User({
        firstName: 'Laxmi',
        lastName: 'Rana',
        emailId: 'luxmi.sonu@gmail.com',
        age: 49,
        gender: 'Female',
        password: '1212232'
    })

    try {
        await user.save();
        res.send('User Created Successfully')

    } catch (err) {
        res.status(400).send('Error saving user details');
    }


})



connectDB().then(() => {
    console.log('DB connection successful');
    app.listen(3000, () => {
        console.log("Server successfully listening on port 3000");
    })

}).catch(err => {
    console.error("DB connection not successful")
})



