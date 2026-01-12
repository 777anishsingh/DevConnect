const adminAuth = (req, res, next) => {
    console.log("Admin Auth fn");

    const token = 'anish'
    const authenticator = (token) === 'anish'
    if (!authenticator) {
        res.status(401).send("Admin Unauthorized");
    } else {
        next();
    }
}

const userAuth = (req, res, next) => {
    console.log("User Auth fn");

    const token = 'anish'
    const authenticator = (token) === 'anish'
    if (!authenticator) {
        res.status(401).send("User Unauthorized");
    } else {
        next();
    }
}

module.exports = { adminAuth, userAuth }