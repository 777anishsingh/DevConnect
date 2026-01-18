const express = require('express')
const profileRouter = express.Router()
const { userAuth } = require('../middleware/Auth')

//GET /profile
profileRouter.get('/profile', userAuth, async (req, res) => {

    try {
        const loggedInUser = req.user
        if (!loggedInUser) {
            throw new Error("User does not exist")
        }
        res.send(loggedInUser)
    } catch (err) {
        res.status(400).send('ERROR: ' + err.message);
    }

})

module.exports = profileRouter;