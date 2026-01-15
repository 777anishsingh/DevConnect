require('dotenv').config()
const connectDB = require("./config/database")
const express = require('express')
const app = express()
const User = require('./model/user')
app.use(express.json())



//PATCH /user

app.patch('/user/:userId', async (req, res) => {
    const userId = req.params?.userId
    const data = req.body


    try {
        const UPDATE_INTERFACE = ["photoUrl", "about", "skills", "age"]
        const isValidUpdate = Object.keys(data).every((k) =>
            UPDATE_INTERFACE.includes(k)
        )

        if (!isValidUpdate) {
            throw new Error("Update not allowed")
        }

        if (data.skills && data?.skills.length > 10) {
            throw new Error("Only 10 skills are allowed to enter")
        }

        const updatedUser = await User.findByIdAndUpdate(userId, data, { returnDocument: 'after', runValidators: true })
        console.log(updatedUser);
        res.send("User Data Updated Successfully")

    }
    catch (err) {
        res.status(400).send('Update failed: ' + err);
    }
})

//DELETE /user
app.delete('/user', async (req, res) => {
    const userId = req.body.userId
    try {
        const user = await User.findByIdAndDelete(userId)
        if (!user) {
            res.status(404).send('User not found');
        } else {

            res.send("User deleted successfully")
        }
    }
    catch (err) {
        res.status(400).send('Something went wrong');
    }
})

// GET /user
app.get('/user', async (req, res) => {

    const email = req.body.emailId;
    try {
        const user = await User.findOne({ emailId: email })
        if (!user) {
            res.status(404).send('User not found');
        } else {
            res.send(user)
        }
    }
    catch (err) {
        res.status(400).send('Something went wrong');
    }
})

// GET /feed
app.get('/feed', async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    }
    catch (err) {
        res.status(400).send('Something went wrong');
    }
})

// POST /signup
app.post('/signup', async (req, res) => {
    const user = new User(req.body);

    try {
        if (user?.skills.length > 10) {
            throw new Error("Only 10 skills are allowed to enter")
        }

        await user.save();
        res.send('User Created Successfully')

    } catch (err) {
        res.status(400).send('Error saving user details' + err);
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
