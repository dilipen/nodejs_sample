const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    // console.log(req, req.url)
    if (req.url.startsWith('/api/')) {
        try {
            // // Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMzQ1LCJleHBpcmVzIjoxNjY5MzgwOTUzfQ.uhNnx2By5lXZwwjkHc0x4naatjA7bFOVcjtLEF2Hd5c
            // const RANDOM_TOKEN_SECRET = 'RANDOM_TOKEN_SECRET'
            // const token = req.headers.authorization.split(' ')[1]
            // const decodedToken = jwt.verify(token, RANDOM_TOKEN_SECRET)
            // const userId = decodedToken.userId
            // req.userId = userId
            next()
        } catch {
            res.status(401).json({
                error: new Error('Invalid request!')
            })
        }
    } else {
        next()
    }
}
