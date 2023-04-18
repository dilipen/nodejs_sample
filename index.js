const express = require('express')
const expressOasGenerator = require('express-oas-generator')
const app = express()
const auth = require('./auth')

const user_router = require('./routers/users')

app.use(auth)
app.use(express.static('public'))
app.use('/api/orch/users', user_router)

expressOasGenerator.init(app, {
    "securityDefinitions": {
        "api_key": {
            "type": "apiKey",
            "name": "Authorization",
            "in": "header",
            "description": "Enter the token with the `Bearer` prefix, e.g. \"Bearer abcde12345\".",
        }
    },
    "security": [
        {
            "api_key": []
        }
    ],
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})
